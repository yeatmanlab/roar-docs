[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Assessment

# Interface: Assessment

Defined in: [src/models/assignment.model.ts:16](src/src/models/assignment.model.ts#16)

An interface representing an assessment.
Defines the structure of an assessment object within an administration.

## See

- [Condition](../type-aliases/Condition.md) - For condition types.
- [ParameterValue](../type-aliases/ParameterValue.md) - For parameter value types.

## Properties

| Property                                | Type                                                                                                                    | Description                                                         | Defined in                                                                 |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <a id="taskid"></a> `taskId`            | `string`                                                                                                                | Unique identifier for the task.                                     | [src/models/assignment.model.ts:18](src/src/models/assignment.model.ts#18) |
| <a id="variantid"></a> `variantId`      | `string`                                                                                                                | Identifier for the specific variant of the task.                    | [src/models/assignment.model.ts:21](src/src/models/assignment.model.ts#21) |
| <a id="variantname"></a> `variantName?` | `string`                                                                                                                | Display name for the task variant.                                  | [src/models/assignment.model.ts:24](src/src/models/assignment.model.ts#24) |
| <a id="params"></a> `params`            | \{ [`x`: `string`]: [`ParameterValue`](../type-aliases/ParameterValue.md); \}                                           | Configuration parameters for the task, mapped by parameter name.    | [src/models/assignment.model.ts:27](src/src/models/assignment.model.ts#27) |
| <a id="conditions"></a> `conditions?`   | \{ `assigned`: [`Condition`](../type-aliases/Condition.md); `optional`: [`Condition`](../type-aliases/Condition.md); \} | Optional conditions controlling task availability and requirements. | [src/models/assignment.model.ts:30](src/src/models/assignment.model.ts#30) |
| `conditions.assigned?`                  | [`Condition`](../type-aliases/Condition.md)                                                                             | Condition determining if task is assigned.                          | [src/models/assignment.model.ts:32](src/src/models/assignment.model.ts#32) |
| `conditions.optional?`                  | [`Condition`](../type-aliases/Condition.md)                                                                             | Condition determining if task is optional.                          | [src/models/assignment.model.ts:34](src/src/models/assignment.model.ts#34) |
