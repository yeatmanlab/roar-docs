[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirebaseImplementationError

# Class: FirebaseImplementationError

Defined in: [packages/core/src/errors/factories/FirebaseImplementationError.error.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/factories/FirebaseImplementationError.error.ts#L11)

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

Defined in: [packages/core/src/errors/factories/FirebaseImplementationError.error.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/factories/FirebaseImplementationError.error.ts#L13)

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

Defined in: [packages/core/src/errors/factories/FirebaseImplementationError.error.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/factories/FirebaseImplementationError.error.ts#L12)

***

### message

> **message**: `string`

Defined in: packages/core/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: packages/core/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: packages/core/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:98

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

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:100

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:91

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
