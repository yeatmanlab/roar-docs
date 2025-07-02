# BigQuery Runtime Configuration File

A BigQuery runtime configuration file (`.bigqueryrc`) is a text file that sets default options for the `bq` command-line tool. This file eliminates the need to repeatedly specify common CLI options for every query.

## What It Does

The `.bigqueryrc` file allows you to:

- Set default formatting options (like JSON output)
- Configure SQL dialect preferences
- Specify default locations and logging settings
- Avoid typing repetitive command-line flags

## Setup

1. Create a file named `.bigqueryrc` in your home directory
2. Add your preferred default options (see example below)
3. The settings will automatically apply to all `bq` commands

## Recommended Configuration

Below is a recommended `.bigqueryrc` file for ROAR development:

```text
--location=us
--apilog=stdout
--format=prettyjson

[query]
--use_legacy_sql=false

[mk]
--use_legacy_sql=false
```

## Configuration Options Explained

- `--location=us`: Sets the default location for BigQuery operations to US region
- `--apilog=stdout`: Displays API request logs to standard output for debugging
- `--format=prettyjson`: Formats query results as readable JSON
- `--use_legacy_sql=false`: Uses standard SQL syntax instead of legacy BigQuery SQL

## Overriding Defaults

You can override any `.bigqueryrc` setting for specific commands:

- **Command-line flags**: `bq query --format=csv "SELECT * FROM table"`
- **Environment variables**: `export BIGQUERY_LOCATION=eu` before running commands

For the complete list of available options, see the [official documentation][link_bq_rc_file].

[link_bq_rc_file]: https://cloud.google.com/bigquery/docs/bq-command-line-tool#adding_flags_to_bigqueryrc
