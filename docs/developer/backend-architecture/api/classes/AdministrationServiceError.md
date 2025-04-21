[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / AdministrationServiceError

# Class: AdministrationServiceError

Defined in: [packages/core/src/errors/services/AdministrationServiceError.error.ts:6](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/services/AdministrationServiceError.error.ts#L6)

Error class for administration service operations.
Extends the base Error class to provide specialized
error handling for administration service operations.

## Extends

- `Error`

## Constructors

### Constructor

> **new AdministrationServiceError**(`message`, `error?`): `AdministrationServiceError`

Defined in: [packages/core/src/errors/services/AdministrationServiceError.error.ts:8](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/services/AdministrationServiceError.error.ts#L8)

#### Parameters

##### message

`string`

##### error?

`any`

#### Returns

`AdministrationServiceError`

#### Overrides

`Error.constructor`

## Properties

### error

> `protected` **error**: `any`

Defined in: [packages/core/src/errors/services/AdministrationServiceError.error.ts:7](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/services/AdministrationServiceError.error.ts#L7)

---

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node_modules/@types/node/globals.d.ts:98

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node_modules/@types/node/globals.d.ts:100

#### Inherited from

`Error.stackTraceLimit`

---

### name

> **name**: `string`

Defined in: packages/core/node_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

---

### message

> **message**: `string`

Defined in: packages/core/node_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

---

### stack?

> `optional` **stack**: `string`

Defined in: packages/core/node_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node_modules/@types/node/globals.d.ts:91

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
