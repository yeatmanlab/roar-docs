[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreIdentityProviderRepositoryError

# Class: FirestoreIdentityProviderRepositoryError

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L12)

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

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L13)

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

Defined in: [packages/core/src/errors/firestore/FirestoreRepositoryError.error.ts:7](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/firestore/FirestoreRepositoryError.error.ts#L7)

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`error`](FirestoreRepositoryError.md#error)

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

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`prepareStackTrace`](FirestoreRepositoryError.md#preparestacktrace)

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node_modules/@types/node/globals.d.ts:100

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`stackTraceLimit`](FirestoreRepositoryError.md#stacktracelimit)

---

### name

> **name**: `string`

Defined in: packages/core/node_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`name`](FirestoreRepositoryError.md#name)

---

### message

> **message**: `string`

Defined in: packages/core/node_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`message`](FirestoreRepositoryError.md#message)

---

### stack?

> `optional` **stack**: `string`

Defined in: packages/core/node_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`stack`](FirestoreRepositoryError.md#stack)

## Methods

### noProviderDataError()

> **noProviderDataError**(): `FirestoreIdentityProviderRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L18)

#### Returns

`FirestoreIdentityProviderRepositoryError`

---

### getByProviderIdError()

> **getByProviderIdError**(): `FirestoreIdentityProviderRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#L25)

#### Returns

`FirestoreIdentityProviderRepositoryError`

---

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

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`captureStackTrace`](FirestoreRepositoryError.md#capturestacktrace)
