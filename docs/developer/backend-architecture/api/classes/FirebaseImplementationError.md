[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirebaseImplementationError

# Class: FirebaseImplementationError

Defined in: [packages/core/src/errors/factories/FirebaseImplementationError.error.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/factories/FirebaseImplementationError.error.ts#L11)

FirebaseImplementationError

An error class for handling Firebase implementation-specific errors.
This class extends the standard Error class and provides additional
functionality to store the original Firebase error object.

FirebaseImplementationError

## Extends

- `Error`

## Constructors

### Constructor

> **new FirebaseImplementationError**(`message`, `error?`): `FirebaseImplementationError`

Defined in: [packages/core/src/errors/factories/FirebaseImplementationError.error.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/factories/FirebaseImplementationError.error.ts#L13)

#### Parameters

##### message

`string`

##### error?

`any`

#### Returns

`FirebaseImplementationError`

#### Overrides

`Error.constructor`

## Properties

### error

> `protected` **error**: `any`

Defined in: [packages/core/src/errors/factories/FirebaseImplementationError.error.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/factories/FirebaseImplementationError.error.ts#L12)

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
