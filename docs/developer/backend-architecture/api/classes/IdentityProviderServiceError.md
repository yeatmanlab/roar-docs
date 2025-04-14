[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / IdentityProviderServiceError

# Class: IdentityProviderServiceError

Defined in: [packages/core/src/errors/services/IdentityProviderServiceError.error.ts:6](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/services/IdentityProviderServiceError.error.ts#L6)

Represents an error that occurred within the Identity Provider Service.
This class extends the built-in Error class to provide additional context
specific to identity provider operations.

## Extends

- `Error`

## Constructors

### Constructor

> **new IdentityProviderServiceError**(`message`, `error?`): `IdentityProviderServiceError`

Defined in: [packages/core/src/errors/services/IdentityProviderServiceError.error.ts:8](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/services/IdentityProviderServiceError.error.ts#L8)

#### Parameters

##### message

`string`

##### error?

`any`

#### Returns

`IdentityProviderServiceError`

#### Overrides

`Error.constructor`

## Properties

### error

> `protected` **error**: `any`

Defined in: [packages/core/src/errors/services/IdentityProviderServiceError.error.ts:7](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/services/IdentityProviderServiceError.error.ts#L7)

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
