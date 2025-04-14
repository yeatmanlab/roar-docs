[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreUserClaimRepositoryError

# Class: FirestoreUserClaimRepositoryError

Defined in: [packages/core/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts:9](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts#L9)

The UserClaimRepositoryError class.
 UserClaimRepositoryError

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

> **new FirestoreUserClaimRepositoryError**(`message`, `error?`): `FirestoreUserClaimRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts:10](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts#L10)

#### Parameters

##### message

`string`

##### error?

`any`

#### Returns

`FirestoreUserClaimRepositoryError`

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

### getByRoarUidError()

> **getByRoarUidError**(): `FirestoreUserClaimRepositoryError`

Defined in: [packages/core/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts#L15)

#### Returns

`FirestoreUserClaimRepositoryError`

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
