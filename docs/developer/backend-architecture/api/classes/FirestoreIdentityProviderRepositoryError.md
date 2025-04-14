[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreIdentityProviderRepositoryError

# Class: FirestoreIdentityProviderRepositoryError

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L12)

FirestoreIdentityProviderRepositoryError

This class extends FirestoreRepositoryError to provide specific error handling
for identity provider repository operations in Firestore.

It contains methods to generate standardized errors for common
identity provider repository failure scenarios.

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

> **new FirestoreIdentityProviderRepositoryError**(`message`, `error?`): `FirestoreIdentityProviderRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L13)

#### Parameters

##### message

`string`

##### error?

`any`

#### Returns

`FirestoreIdentityProviderRepositoryError`

#### Overrides

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`constructor`](FirestoreRepositoryError.md#constructor)

## Properties

### error

> `protected` **error**: `any`

Defined in: [packages/core/src/errors/firestore/FirestoreRepositoryError.error.ts:7](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreRepositoryError.error.ts#L7)

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`error`](FirestoreRepositoryError.md#error)

***

### message

> **message**: `string`

Defined in: packages/core/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`message`](FirestoreRepositoryError.md#message)

***

### name

> **name**: `string`

Defined in: packages/core/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`name`](FirestoreRepositoryError.md#name)

***

### stack?

> `optional` **stack**: `string`

Defined in: packages/core/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`stack`](FirestoreRepositoryError.md#stack)

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

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`prepareStackTrace`](FirestoreRepositoryError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:100

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`stackTraceLimit`](FirestoreRepositoryError.md#stacktracelimit)

## Methods

### getByProviderIdError()

> **getByProviderIdError**(): `FirestoreIdentityProviderRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L25)

#### Returns

`FirestoreIdentityProviderRepositoryError`

***

### noProviderDataError()

> **noProviderDataError**(): `FirestoreIdentityProviderRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L18)

#### Returns

`FirestoreIdentityProviderRepositoryError`

***

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

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`captureStackTrace`](FirestoreRepositoryError.md#capturestacktrace)
