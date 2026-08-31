# Quick Reference

Lookup only — for what any of it means, see the [Assessment Environment guide](./README.md). Run every command from the assessment's directory, e.g. `apps/assessments/roar-swr/`.

## Commands

| Command | Does | Data |
| --- | --- | --- |
| `npm run setup` | Check prerequisites, install, build libraries, create your config | safe |
| `npm start` | Start the stack if needed, then this assessment's dev server | safe |
| `npm run seed:tasks` | Seed new variants into the **running** database | safe |
| `npm run update` | Rebuild platform libraries on your machine | safe |
| `npm run rebuild` | Clean rebuild of the Docker images | safe |
| `npm stop` | Stop everything **and delete the database** | **deletes** |
| `npm restart` | Teardown **and delete the database**, then start fresh | **deletes** |

## Four ways to stop

| Action | Runs, trials, scores | Seeded variants |
| --- | --- | --- |
| **Ctrl+C** — dev server only | kept | kept |
| **`TRUNCATE app.runs CASCADE;`** in `roar_assessment` | cleared, on purpose | kept |
| **`npm stop`** | deleted | deleted |
| **`npm restart`** | deleted | deleted, re-seeded |

Both destructive commands prompt for confirmation; declining changes nothing.

## Ports

| Process | URL |
| --- | --- |
| Dev server — *where you play* | <http://localhost:8000> |
| PostgreSQL — *where you query* | `localhost:5433` (not 5432) |
| Backend | <http://localhost:4000> |
| Firebase Auth / Storage emulators | <http://localhost:9099> · <http://localhost:9199> |
| Firebase Emulator UI | <http://localhost:9000> |

## Connecting

Host `localhost` · port `5433` (`ASSESSMENT_PG_PORT`) · user `postgres` · **no password** · `sslmode=disable` · databases `roar_core` and `roar_assessment`.

```bash
pgweb --url "postgres://postgres@localhost:5433/roar_core?sslmode=disable"                       # → :8081
pgweb --url "postgres://postgres@localhost:5433/roar_assessment?sslmode=disable" --listen 8082   # → :8082
psql "postgres://postgres@localhost:5433/roar_core?sslmode=disable"
```

Or run `pgweb` with no arguments and fill in those values on the **Standard** tab of the form it opens at <http://localhost:8081> — see the [guide](./README.md#connecting-with-pgweb) for a screenshot.

PgAdmin: host `localhost`, port `5433`, user `postgres`, blank password.

## Where the data lives

Every table is in the `app` schema — always prefix with `app.`

| Data | Database | Tables |
| --- | --- | --- |
| Participants, tasks, variants | `roar_core` | `users`, `tasks`, `task_variants`, `task_variant_parameters` |
| Runs, trials, scores, interactions | `roar_assessment` | `runs`, `run_trials`, `run_scores`, `run_trial_interactions` |
| Runs and scores, joinable to participants and tasks | `roar_core` | `app_assessment_fdw.runs`, `app_assessment_fdw.run_scores` |

`run_trials` is **not** mirrored — trial data is only in `roar_assessment`. `run_demographics` is in `roar_core`, and stays empty for anonymous runs.

## Queries

Always include `AND deleted_at IS NULL` — records are soft-deleted.

### Seeded variants, with their IDs · `roar_core`

```sql
SELECT t.slug AS task, tv.id AS variant_id,
       tv.name AS variant_name, tv.status,
       jsonb_object_agg(tvp.name, tvp.value)
         FILTER (WHERE tvp.name IS NOT NULL) AS params
FROM app.task_variants tv
JOIN app.tasks t ON t.id = tv.task_id
LEFT JOIN app.task_variant_parameters tvp ON tvp.task_variant_id = tv.id
GROUP BY t.slug, tv.id, tv.name, tv.status
ORDER BY t.slug, tv.name;
```

### Runs for a task, with the participant · `roar_core`

```sql
SELECT r.id, u.assessment_pid, r.is_anonymous,
       r.completed_at, r.reliable_run, r.metadata
FROM app_assessment_fdw.runs r
JOIN app.users u ON u.id = r.user_id
JOIN app.task_variants tv ON tv.id = r.task_variant_id
JOIN app.tasks t ON t.id = tv.task_id
WHERE t.slug = 'swr'   -- English only; LIKE 'swr%' for all five
  AND r.deleted_at IS NULL
ORDER BY r.created_at DESC;
```

Anonymous runs have no name — `assessment_pid` is the identifier. Language-as-task assessments use suffixed slugs — SWR is five tasks (`swr`, `swr-es`, `swr-it`, `swr-pt`, `swr-de`) — so match with `LIKE 'swr%'` or list them; a single `=` silently misses runs.

### Trials for one run · `roar_assessment`

```sql
SELECT trial_num_total, item, correct, response,
       response_time_ms, subtask, assessment_stage
FROM app.run_trials
WHERE run_id = '<your-run-id>'
ORDER BY trial_index;
```

### Scores for completed runs · `roar_assessment`

```sql
SELECT r.id AS run_id, s.type, s.domain, s.name, s.value,
       s.assessment_stage, s.category_score
FROM app.run_scores s
JOIN app.runs r ON r.id = s.run_id
WHERE r.completed_at IS NOT NULL AND r.deleted_at IS NULL
ORDER BY r.completed_at DESC;
```

### Run summary — counts, engagement, reliability · `roar_assessment`

```sql
SELECT r.id, r.completed_at, r.aborted_at,
       r.reliable_run, r.engagement_flags,
       (SELECT count(*) FROM app.run_trials t
          WHERE t.run_id = r.id) AS trial_count,
       (SELECT count(*) FROM app.run_scores s
          WHERE s.run_id = r.id) AS score_count
FROM app.runs r
WHERE r.deleted_at IS NULL
ORDER BY r.created_at DESC;
```

`engagement_flags` is a JSONB object of booleans — `incomplete`, `responseTimeTooFast`, `accuracyTooLow`, `notEnoughResponses`. `reliable_run` is the assessment's overall verdict.

### Engagement events — focus/blur, fullscreen · `roar_assessment`

```sql
SELECT t.trial_index, i.interaction_type, i.time_ms
FROM app.run_trial_interactions i
JOIN app.run_trials t ON t.id = i.trial_id
WHERE t.run_id = '<your-run-id>'
ORDER BY t.trial_index, i.time_ms;
```

### Scores with participant, task, and run metadata · `roar_core`

The one-query export, via the mirrored tables.

```sql
SELECT u.assessment_pid, t.slug AS task,
       s.name AS score_name, s.value AS score_value,
       r.metadata ->> 'sessionId' AS session_id
FROM app_assessment_fdw.run_scores s
JOIN app_assessment_fdw.runs r ON r.id = s.run_id
JOIN app.users u ON u.id = r.user_id
JOIN app.task_variants tv ON tv.id = r.task_variant_id
JOIN app.tasks t ON t.id = tv.task_id
WHERE r.deleted_at IS NULL
ORDER BY r.completed_at DESC NULLS LAST;
```

## Metadata

`runs.metadata` holds run-level context. `run_trials.metadata` holds any trial field with no standard column. `run_scores` has **no** metadata column — join to the run.

```sql
-- discover the keys first
SELECT DISTINCT jsonb_object_keys(metadata) FROM app.run_trials
WHERE run_id = '<your-run-id>' AND metadata IS NOT NULL;

-- extract:  ->> yields text, -> keeps JSON
SELECT item, metadata ->> 'someField' AS some_field FROM app.run_trials …

-- filter:  ->> compares as text, @> does JSON containment
WHERE metadata ->> 'condition' = 'practice'
WHERE metadata @> '{"condition": "practice"}'
```

## Export to CSV

- **PgWeb** — run the query, then the export control on the results toolbar → CSV.
- **`psql \copy`** — one physical line, writes to your current directory: `\copy (SELECT …) TO 'trials.csv' WITH (FORMAT csv, HEADER)`
- **Shell** — `psql "postgres://postgres@localhost:5433/roar_assessment?sslmode=disable" --csv -c "SELECT …" > trials.csv`

Trial-level exports run against `roar_assessment`; participant and score joins against `roar_core`.

## Variants

- `taskVariantParameters.json` is yours, not committed, and required before the first start. `taskVariantParameters.example.json` beside it documents every parameter.
- Seeding is **idempotent and additive, matched by name**. To change parameters, use a **new** `variantName`.
- **Editing the file does not seed it** — run `npm run seed:tasks`, not `npm restart`.
- **Variant picker**: top-right of the assessment, development and staging only, scoped to this assessment's tasks.
- **With no `variantId`**: the task's entry in `DEFAULT_VARIANT_NAMES` in `serve/serve.js` (matched by name), else the oldest published variant. A default that doesn't resolve **warns in the browser console** and falls back — check the console if a run looks wrong.

| URL parameter | Purpose |
| --- | --- |
| `variantId` | Run a specific seeded variant |
| `participant` | Participant ID (PID) for the run |
| `grade` | Participant grade |
| `birthyear`, `birthmonth`, `age`, `agemonths` | Age or date-of-birth context |
| `labId` | Lab identifier |
| `taskVersion` | Task version string (defaults to `1.0`) |

Game parameters always come from the variant; URL parameters only select one and attach participant context.

## Switching assessments

Ctrl+C → `cd ../<other>` → `npm run seed:tasks` (first visit only) → `npm start`. Switching back needs no re-seed, and you never re-run `npm run setup`.

## After a git pull

| Changed | Run |
| --- | --- |
| SDK, assessment schema, scoring tables | `npm run update`, then restart the dev server |
| Backend, migrations, API contract, Dockerfile, root dependencies | `npm run rebuild` |
| The assessment schema (used by both) | both |
| Not sure — big pull | `npm run rebuild`, then `npm run update` |

Neither deletes data.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Port 5433 in use | `docker ps \| grep 5433`; stop it, or `ASSESSMENT_PG_PORT=<port> npm start` |
| Port 8000 in use | A previous dev server is still running — stop that process |
| `taskVariantParameters.json not found` | `npm run setup`, or copy the example file |
| Migration container failed / "Unknown task" | Unregistered assessment or invalid parameter; the error names both |
| New variant didn't show up | `npm run seed:tasks` — not `npm restart` |
| Wrong variant loaded | Declared default doesn't match your names — check the browser console |
| Code change not taking effect | Host library → `update`; backend or migration → `rebuild` |
| Firebase emulator won't start / can't bind 9000, 9099, 9199 | Another Firebase emulator holds them — stop it, then `npm start`. Recreate the container if the failed attempt left it in `Created` state |
| Stale containers on start | `npm stop` then `npm start` — **deletes data** |
| `docker stop` permission denied (Linux) | `npm stop` prints the exact `sudo kill` to run |

Two seeding messages are benign: `Launch sandbox administration not found` (that fixture isn't seeded here) and `Config "…" names defaultVariant "…", which is not in the parameters file` (you renamed your variants — only the sandbox assignment was skipped). Neither affects what `localhost:8000` loads.

## Recordings

Browse at <http://localhost:9000> → **Storage** tab, bucket `demo-roar.appspot.com` ([screenshots](./README.md#recordings-audio-and-video-assessments)). Path is `{taskId}/{participantId}/{assessmentPid}/{administrationId}/{runId}/{filename}`, and each recording's `gs://` reference lands in `run_trials.metadata` (Read Aloud: `uploadUrl`).

**Held in memory** — recordings survive Ctrl+C but are cleared by `npm restart` and `npm stop`. Download anything you need to keep.
