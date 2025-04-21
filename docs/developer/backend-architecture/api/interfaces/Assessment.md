[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Assessment

# Interface: Assessment

Defined in: [packages/core/src/models/assignment.model.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/assignment.model.ts#L15)

An interface representing an assessment.
This interface is used to define the structure of an assessment object.
Assessment

## See

- [Condition](../type-aliases/Condition.md)
- [ParameterValue](../type-aliases/ParameterValue.md)

## Properties

### taskId

> **taskId**: `string`

Defined in: [packages/core/src/models/assignment.model.ts:16](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/assignment.model.ts#L16)

The task ID of the assessment.

---

### variantId

> **variantId**: `string`

Defined in: [packages/core/src/models/assignment.model.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/assignment.model.ts#L17)

The variant ID of the assessment.

---

### variantName?

> `optional` **variantName**: `string`

Defined in: [packages/core/src/models/assignment.model.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/assignment.model.ts#L18)

The variant name of the assessment.

---

### params

> **params**: `object`

Defined in: [packages/core/src/models/assignment.model.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/assignment.model.ts#L19)

The parameters for the assessment.

#### Index Signature

\[`x`: `string`\]: [`ParameterValue`](../type-aliases/ParameterValue.md)

---

### conditions?

> `optional` **conditions**: `object`

Defined in: [packages/core/src/models/assignment.model.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/assignment.model.ts#L20)

The conditions for the assessment.

#### assigned?

> `optional` **assigned**: [`Condition`](../type-aliases/Condition.md)

#### optional?

> `optional` **optional**: [`Condition`](../type-aliases/Condition.md)
