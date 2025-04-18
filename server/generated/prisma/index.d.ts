
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model reset_password
 * 
 */
export type reset_password = $Result.DefaultSelection<Prisma.$reset_passwordPayload>
/**
 * Model email_verification
 * 
 */
export type email_verification = $Result.DefaultSelection<Prisma.$email_verificationPayload>
/**
 * Model chat
 * 
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>
/**
 * Model chat_participant
 * 
 */
export type chat_participant = $Result.DefaultSelection<Prisma.$chat_participantPayload>
/**
 * Model message
 * 
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>
/**
 * Model invitation
 * 
 */
export type invitation = $Result.DefaultSelection<Prisma.$invitationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reset_password`: Exposes CRUD operations for the **reset_password** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reset_passwords
    * const reset_passwords = await prisma.reset_password.findMany()
    * ```
    */
  get reset_password(): Prisma.reset_passwordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_verification`: Exposes CRUD operations for the **email_verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_verifications
    * const email_verifications = await prisma.email_verification.findMany()
    * ```
    */
  get email_verification(): Prisma.email_verificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.chatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_participant`: Exposes CRUD operations for the **chat_participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_participants
    * const chat_participants = await prisma.chat_participant.findMany()
    * ```
    */
  get chat_participant(): Prisma.chat_participantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.invitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    reset_password: 'reset_password',
    email_verification: 'email_verification',
    chat: 'chat',
    chat_participant: 'chat_participant',
    message: 'message',
    invitation: 'invitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "reset_password" | "email_verification" | "chat" | "chat_participant" | "message" | "invitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      reset_password: {
        payload: Prisma.$reset_passwordPayload<ExtArgs>
        fields: Prisma.reset_passwordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reset_passwordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reset_passwordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>
          }
          findFirst: {
            args: Prisma.reset_passwordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reset_passwordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>
          }
          findMany: {
            args: Prisma.reset_passwordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>[]
          }
          create: {
            args: Prisma.reset_passwordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>
          }
          createMany: {
            args: Prisma.reset_passwordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reset_passwordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>
          }
          update: {
            args: Prisma.reset_passwordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>
          }
          deleteMany: {
            args: Prisma.reset_passwordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reset_passwordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reset_passwordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reset_passwordPayload>
          }
          aggregate: {
            args: Prisma.Reset_passwordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReset_password>
          }
          groupBy: {
            args: Prisma.reset_passwordGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reset_passwordGroupByOutputType>[]
          }
          count: {
            args: Prisma.reset_passwordCountArgs<ExtArgs>
            result: $Utils.Optional<Reset_passwordCountAggregateOutputType> | number
          }
        }
      }
      email_verification: {
        payload: Prisma.$email_verificationPayload<ExtArgs>
        fields: Prisma.email_verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          findFirst: {
            args: Prisma.email_verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          findMany: {
            args: Prisma.email_verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>[]
          }
          create: {
            args: Prisma.email_verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          createMany: {
            args: Prisma.email_verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.email_verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          update: {
            args: Prisma.email_verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          deleteMany: {
            args: Prisma.email_verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.email_verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          aggregate: {
            args: Prisma.Email_verificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_verification>
          }
          groupBy: {
            args: Prisma.email_verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_verificationCountArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationCountAggregateOutputType> | number
          }
        }
      }
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>
        fields: Prisma.chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      chat_participant: {
        payload: Prisma.$chat_participantPayload<ExtArgs>
        fields: Prisma.chat_participantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_participantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_participantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>
          }
          findFirst: {
            args: Prisma.chat_participantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_participantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>
          }
          findMany: {
            args: Prisma.chat_participantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>[]
          }
          create: {
            args: Prisma.chat_participantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>
          }
          createMany: {
            args: Prisma.chat_participantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chat_participantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>
          }
          update: {
            args: Prisma.chat_participantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>
          }
          deleteMany: {
            args: Prisma.chat_participantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_participantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chat_participantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_participantPayload>
          }
          aggregate: {
            args: Prisma.Chat_participantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_participant>
          }
          groupBy: {
            args: Prisma.chat_participantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_participantGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_participantCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_participantCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      invitation: {
        payload: Prisma.$invitationPayload<ExtArgs>
        fields: Prisma.invitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          findFirst: {
            args: Prisma.invitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          findMany: {
            args: Prisma.invitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>[]
          }
          create: {
            args: Prisma.invitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          createMany: {
            args: Prisma.invitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.invitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          update: {
            args: Prisma.invitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          deleteMany: {
            args: Prisma.invitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.invitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.invitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    reset_password?: reset_passwordOmit
    email_verification?: email_verificationOmit
    chat?: chatOmit
    chat_participant?: chat_participantOmit
    message?: messageOmit
    invitation?: invitationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chat_parcitipant: number
    invitation: number
    message: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_parcitipant?: boolean | UserCountOutputTypeCountChat_parcitipantArgs
    invitation?: boolean | UserCountOutputTypeCountInvitationArgs
    message?: boolean | UserCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat_parcitipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_participantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    chat_participant: number
    message: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_participant?: boolean | ChatCountOutputTypeCountChat_participantArgs
    message?: boolean | ChatCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountChat_participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_participantWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    profilePic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat_parcitipant?: boolean | user$chat_parcitipantArgs<ExtArgs>
    email_verification?: boolean | user$email_verificationArgs<ExtArgs>
    invitation?: boolean | user$invitationArgs<ExtArgs>
    message?: boolean | user$messageArgs<ExtArgs>
    reset_password?: boolean | user$reset_passwordArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "profilePic" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_parcitipant?: boolean | user$chat_parcitipantArgs<ExtArgs>
    email_verification?: boolean | user$email_verificationArgs<ExtArgs>
    invitation?: boolean | user$invitationArgs<ExtArgs>
    message?: boolean | user$messageArgs<ExtArgs>
    reset_password?: boolean | user$reset_passwordArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      chat_parcitipant: Prisma.$chat_participantPayload<ExtArgs>[]
      email_verification: Prisma.$email_verificationPayload<ExtArgs> | null
      invitation: Prisma.$invitationPayload<ExtArgs>[]
      message: Prisma.$messagePayload<ExtArgs>[]
      reset_password: Prisma.$reset_passwordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      password: string
      profilePic: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_parcitipant<T extends user$chat_parcitipantArgs<ExtArgs> = {}>(args?: Subset<T, user$chat_parcitipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_verification<T extends user$email_verificationArgs<ExtArgs> = {}>(args?: Subset<T, user$email_verificationArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitation<T extends user$invitationArgs<ExtArgs> = {}>(args?: Subset<T, user$invitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message<T extends user$messageArgs<ExtArgs> = {}>(args?: Subset<T, user$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reset_password<T extends user$reset_passwordArgs<ExtArgs> = {}>(args?: Subset<T, user$reset_passwordArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly firstname: FieldRef<"user", 'String'>
    readonly lastname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly profilePic: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.chat_parcitipant
   */
  export type user$chat_parcitipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    where?: chat_participantWhereInput
    orderBy?: chat_participantOrderByWithRelationInput | chat_participantOrderByWithRelationInput[]
    cursor?: chat_participantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_participantScalarFieldEnum | Chat_participantScalarFieldEnum[]
  }

  /**
   * user.email_verification
   */
  export type user$email_verificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    where?: email_verificationWhereInput
  }

  /**
   * user.invitation
   */
  export type user$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    where?: invitationWhereInput
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    cursor?: invitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * user.message
   */
  export type user$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user.reset_password
   */
  export type user$reset_passwordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    where?: reset_passwordWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model reset_password
   */

  export type AggregateReset_password = {
    _count: Reset_passwordCountAggregateOutputType | null
    _avg: Reset_passwordAvgAggregateOutputType | null
    _sum: Reset_passwordSumAggregateOutputType | null
    _min: Reset_passwordMinAggregateOutputType | null
    _max: Reset_passwordMaxAggregateOutputType | null
  }

  export type Reset_passwordAvgAggregateOutputType = {
    sendAttempts: number | null
  }

  export type Reset_passwordSumAggregateOutputType = {
    sendAttempts: number | null
  }

  export type Reset_passwordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    sendAttempts: number | null
    lastSentAt: Date | null
    resetedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresIn: Date | null
  }

  export type Reset_passwordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    sendAttempts: number | null
    lastSentAt: Date | null
    resetedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresIn: Date | null
  }

  export type Reset_passwordCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    sendAttempts: number
    lastSentAt: number
    resetedAt: number
    createdAt: number
    updatedAt: number
    expiresIn: number
    _all: number
  }


  export type Reset_passwordAvgAggregateInputType = {
    sendAttempts?: true
  }

  export type Reset_passwordSumAggregateInputType = {
    sendAttempts?: true
  }

  export type Reset_passwordMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    sendAttempts?: true
    lastSentAt?: true
    resetedAt?: true
    createdAt?: true
    updatedAt?: true
    expiresIn?: true
  }

  export type Reset_passwordMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    sendAttempts?: true
    lastSentAt?: true
    resetedAt?: true
    createdAt?: true
    updatedAt?: true
    expiresIn?: true
  }

  export type Reset_passwordCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    sendAttempts?: true
    lastSentAt?: true
    resetedAt?: true
    createdAt?: true
    updatedAt?: true
    expiresIn?: true
    _all?: true
  }

  export type Reset_passwordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reset_password to aggregate.
     */
    where?: reset_passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reset_passwords to fetch.
     */
    orderBy?: reset_passwordOrderByWithRelationInput | reset_passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reset_passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reset_passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reset_passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reset_passwords
    **/
    _count?: true | Reset_passwordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reset_passwordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reset_passwordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reset_passwordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reset_passwordMaxAggregateInputType
  }

  export type GetReset_passwordAggregateType<T extends Reset_passwordAggregateArgs> = {
        [P in keyof T & keyof AggregateReset_password]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReset_password[P]>
      : GetScalarType<T[P], AggregateReset_password[P]>
  }




  export type reset_passwordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reset_passwordWhereInput
    orderBy?: reset_passwordOrderByWithAggregationInput | reset_passwordOrderByWithAggregationInput[]
    by: Reset_passwordScalarFieldEnum[] | Reset_passwordScalarFieldEnum
    having?: reset_passwordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reset_passwordCountAggregateInputType | true
    _avg?: Reset_passwordAvgAggregateInputType
    _sum?: Reset_passwordSumAggregateInputType
    _min?: Reset_passwordMinAggregateInputType
    _max?: Reset_passwordMaxAggregateInputType
  }

  export type Reset_passwordGroupByOutputType = {
    id: string
    userId: string
    code: string | null
    sendAttempts: number
    lastSentAt: Date | null
    resetedAt: Date | null
    createdAt: Date
    updatedAt: Date
    expiresIn: Date | null
    _count: Reset_passwordCountAggregateOutputType | null
    _avg: Reset_passwordAvgAggregateOutputType | null
    _sum: Reset_passwordSumAggregateOutputType | null
    _min: Reset_passwordMinAggregateOutputType | null
    _max: Reset_passwordMaxAggregateOutputType | null
  }

  type GetReset_passwordGroupByPayload<T extends reset_passwordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reset_passwordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reset_passwordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reset_passwordGroupByOutputType[P]>
            : GetScalarType<T[P], Reset_passwordGroupByOutputType[P]>
        }
      >
    >


  export type reset_passwordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    sendAttempts?: boolean
    lastSentAt?: boolean
    resetedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresIn?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reset_password"]>



  export type reset_passwordSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    sendAttempts?: boolean
    lastSentAt?: boolean
    resetedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresIn?: boolean
  }

  export type reset_passwordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "sendAttempts" | "lastSentAt" | "resetedAt" | "createdAt" | "updatedAt" | "expiresIn", ExtArgs["result"]["reset_password"]>
  export type reset_passwordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $reset_passwordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reset_password"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string | null
      sendAttempts: number
      lastSentAt: Date | null
      resetedAt: Date | null
      createdAt: Date
      updatedAt: Date
      expiresIn: Date | null
    }, ExtArgs["result"]["reset_password"]>
    composites: {}
  }

  type reset_passwordGetPayload<S extends boolean | null | undefined | reset_passwordDefaultArgs> = $Result.GetResult<Prisma.$reset_passwordPayload, S>

  type reset_passwordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reset_passwordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reset_passwordCountAggregateInputType | true
    }

  export interface reset_passwordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reset_password'], meta: { name: 'reset_password' } }
    /**
     * Find zero or one Reset_password that matches the filter.
     * @param {reset_passwordFindUniqueArgs} args - Arguments to find a Reset_password
     * @example
     * // Get one Reset_password
     * const reset_password = await prisma.reset_password.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reset_passwordFindUniqueArgs>(args: SelectSubset<T, reset_passwordFindUniqueArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reset_password that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reset_passwordFindUniqueOrThrowArgs} args - Arguments to find a Reset_password
     * @example
     * // Get one Reset_password
     * const reset_password = await prisma.reset_password.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reset_passwordFindUniqueOrThrowArgs>(args: SelectSubset<T, reset_passwordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reset_password that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reset_passwordFindFirstArgs} args - Arguments to find a Reset_password
     * @example
     * // Get one Reset_password
     * const reset_password = await prisma.reset_password.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reset_passwordFindFirstArgs>(args?: SelectSubset<T, reset_passwordFindFirstArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reset_password that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reset_passwordFindFirstOrThrowArgs} args - Arguments to find a Reset_password
     * @example
     * // Get one Reset_password
     * const reset_password = await prisma.reset_password.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reset_passwordFindFirstOrThrowArgs>(args?: SelectSubset<T, reset_passwordFindFirstOrThrowArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reset_passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reset_passwordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reset_passwords
     * const reset_passwords = await prisma.reset_password.findMany()
     * 
     * // Get first 10 Reset_passwords
     * const reset_passwords = await prisma.reset_password.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reset_passwordWithIdOnly = await prisma.reset_password.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reset_passwordFindManyArgs>(args?: SelectSubset<T, reset_passwordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reset_password.
     * @param {reset_passwordCreateArgs} args - Arguments to create a Reset_password.
     * @example
     * // Create one Reset_password
     * const Reset_password = await prisma.reset_password.create({
     *   data: {
     *     // ... data to create a Reset_password
     *   }
     * })
     * 
     */
    create<T extends reset_passwordCreateArgs>(args: SelectSubset<T, reset_passwordCreateArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reset_passwords.
     * @param {reset_passwordCreateManyArgs} args - Arguments to create many Reset_passwords.
     * @example
     * // Create many Reset_passwords
     * const reset_password = await prisma.reset_password.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reset_passwordCreateManyArgs>(args?: SelectSubset<T, reset_passwordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reset_password.
     * @param {reset_passwordDeleteArgs} args - Arguments to delete one Reset_password.
     * @example
     * // Delete one Reset_password
     * const Reset_password = await prisma.reset_password.delete({
     *   where: {
     *     // ... filter to delete one Reset_password
     *   }
     * })
     * 
     */
    delete<T extends reset_passwordDeleteArgs>(args: SelectSubset<T, reset_passwordDeleteArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reset_password.
     * @param {reset_passwordUpdateArgs} args - Arguments to update one Reset_password.
     * @example
     * // Update one Reset_password
     * const reset_password = await prisma.reset_password.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reset_passwordUpdateArgs>(args: SelectSubset<T, reset_passwordUpdateArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reset_passwords.
     * @param {reset_passwordDeleteManyArgs} args - Arguments to filter Reset_passwords to delete.
     * @example
     * // Delete a few Reset_passwords
     * const { count } = await prisma.reset_password.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reset_passwordDeleteManyArgs>(args?: SelectSubset<T, reset_passwordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reset_passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reset_passwordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reset_passwords
     * const reset_password = await prisma.reset_password.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reset_passwordUpdateManyArgs>(args: SelectSubset<T, reset_passwordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reset_password.
     * @param {reset_passwordUpsertArgs} args - Arguments to update or create a Reset_password.
     * @example
     * // Update or create a Reset_password
     * const reset_password = await prisma.reset_password.upsert({
     *   create: {
     *     // ... data to create a Reset_password
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reset_password we want to update
     *   }
     * })
     */
    upsert<T extends reset_passwordUpsertArgs>(args: SelectSubset<T, reset_passwordUpsertArgs<ExtArgs>>): Prisma__reset_passwordClient<$Result.GetResult<Prisma.$reset_passwordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reset_passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reset_passwordCountArgs} args - Arguments to filter Reset_passwords to count.
     * @example
     * // Count the number of Reset_passwords
     * const count = await prisma.reset_password.count({
     *   where: {
     *     // ... the filter for the Reset_passwords we want to count
     *   }
     * })
    **/
    count<T extends reset_passwordCountArgs>(
      args?: Subset<T, reset_passwordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reset_passwordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reset_password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reset_passwordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reset_passwordAggregateArgs>(args: Subset<T, Reset_passwordAggregateArgs>): Prisma.PrismaPromise<GetReset_passwordAggregateType<T>>

    /**
     * Group by Reset_password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reset_passwordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reset_passwordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reset_passwordGroupByArgs['orderBy'] }
        : { orderBy?: reset_passwordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reset_passwordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReset_passwordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reset_password model
   */
  readonly fields: reset_passwordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reset_password.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reset_passwordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reset_password model
   */
  interface reset_passwordFieldRefs {
    readonly id: FieldRef<"reset_password", 'String'>
    readonly userId: FieldRef<"reset_password", 'String'>
    readonly code: FieldRef<"reset_password", 'String'>
    readonly sendAttempts: FieldRef<"reset_password", 'Int'>
    readonly lastSentAt: FieldRef<"reset_password", 'DateTime'>
    readonly resetedAt: FieldRef<"reset_password", 'DateTime'>
    readonly createdAt: FieldRef<"reset_password", 'DateTime'>
    readonly updatedAt: FieldRef<"reset_password", 'DateTime'>
    readonly expiresIn: FieldRef<"reset_password", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reset_password findUnique
   */
  export type reset_passwordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * Filter, which reset_password to fetch.
     */
    where: reset_passwordWhereUniqueInput
  }

  /**
   * reset_password findUniqueOrThrow
   */
  export type reset_passwordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * Filter, which reset_password to fetch.
     */
    where: reset_passwordWhereUniqueInput
  }

  /**
   * reset_password findFirst
   */
  export type reset_passwordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * Filter, which reset_password to fetch.
     */
    where?: reset_passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reset_passwords to fetch.
     */
    orderBy?: reset_passwordOrderByWithRelationInput | reset_passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reset_passwords.
     */
    cursor?: reset_passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reset_passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reset_passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reset_passwords.
     */
    distinct?: Reset_passwordScalarFieldEnum | Reset_passwordScalarFieldEnum[]
  }

  /**
   * reset_password findFirstOrThrow
   */
  export type reset_passwordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * Filter, which reset_password to fetch.
     */
    where?: reset_passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reset_passwords to fetch.
     */
    orderBy?: reset_passwordOrderByWithRelationInput | reset_passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reset_passwords.
     */
    cursor?: reset_passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reset_passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reset_passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reset_passwords.
     */
    distinct?: Reset_passwordScalarFieldEnum | Reset_passwordScalarFieldEnum[]
  }

  /**
   * reset_password findMany
   */
  export type reset_passwordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * Filter, which reset_passwords to fetch.
     */
    where?: reset_passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reset_passwords to fetch.
     */
    orderBy?: reset_passwordOrderByWithRelationInput | reset_passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reset_passwords.
     */
    cursor?: reset_passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reset_passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reset_passwords.
     */
    skip?: number
    distinct?: Reset_passwordScalarFieldEnum | Reset_passwordScalarFieldEnum[]
  }

  /**
   * reset_password create
   */
  export type reset_passwordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * The data needed to create a reset_password.
     */
    data: XOR<reset_passwordCreateInput, reset_passwordUncheckedCreateInput>
  }

  /**
   * reset_password createMany
   */
  export type reset_passwordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reset_passwords.
     */
    data: reset_passwordCreateManyInput | reset_passwordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reset_password update
   */
  export type reset_passwordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * The data needed to update a reset_password.
     */
    data: XOR<reset_passwordUpdateInput, reset_passwordUncheckedUpdateInput>
    /**
     * Choose, which reset_password to update.
     */
    where: reset_passwordWhereUniqueInput
  }

  /**
   * reset_password updateMany
   */
  export type reset_passwordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reset_passwords.
     */
    data: XOR<reset_passwordUpdateManyMutationInput, reset_passwordUncheckedUpdateManyInput>
    /**
     * Filter which reset_passwords to update
     */
    where?: reset_passwordWhereInput
    /**
     * Limit how many reset_passwords to update.
     */
    limit?: number
  }

  /**
   * reset_password upsert
   */
  export type reset_passwordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * The filter to search for the reset_password to update in case it exists.
     */
    where: reset_passwordWhereUniqueInput
    /**
     * In case the reset_password found by the `where` argument doesn't exist, create a new reset_password with this data.
     */
    create: XOR<reset_passwordCreateInput, reset_passwordUncheckedCreateInput>
    /**
     * In case the reset_password was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reset_passwordUpdateInput, reset_passwordUncheckedUpdateInput>
  }

  /**
   * reset_password delete
   */
  export type reset_passwordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
    /**
     * Filter which reset_password to delete.
     */
    where: reset_passwordWhereUniqueInput
  }

  /**
   * reset_password deleteMany
   */
  export type reset_passwordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reset_passwords to delete
     */
    where?: reset_passwordWhereInput
    /**
     * Limit how many reset_passwords to delete.
     */
    limit?: number
  }

  /**
   * reset_password without action
   */
  export type reset_passwordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reset_password
     */
    select?: reset_passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reset_password
     */
    omit?: reset_passwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reset_passwordInclude<ExtArgs> | null
  }


  /**
   * Model email_verification
   */

  export type AggregateEmail_verification = {
    _count: Email_verificationCountAggregateOutputType | null
    _avg: Email_verificationAvgAggregateOutputType | null
    _sum: Email_verificationSumAggregateOutputType | null
    _min: Email_verificationMinAggregateOutputType | null
    _max: Email_verificationMaxAggregateOutputType | null
  }

  export type Email_verificationAvgAggregateOutputType = {
    sendAttempts: number | null
  }

  export type Email_verificationSumAggregateOutputType = {
    sendAttempts: number | null
  }

  export type Email_verificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    verified: boolean | null
    verifiedAt: Date | null
    expiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSentAt: Date | null
    sendAttempts: number | null
  }

  export type Email_verificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    verified: boolean | null
    verifiedAt: Date | null
    expiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSentAt: Date | null
    sendAttempts: number | null
  }

  export type Email_verificationCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    verified: number
    verifiedAt: number
    expiresIn: number
    createdAt: number
    updatedAt: number
    lastSentAt: number
    sendAttempts: number
    _all: number
  }


  export type Email_verificationAvgAggregateInputType = {
    sendAttempts?: true
  }

  export type Email_verificationSumAggregateInputType = {
    sendAttempts?: true
  }

  export type Email_verificationMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    verified?: true
    verifiedAt?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
    lastSentAt?: true
    sendAttempts?: true
  }

  export type Email_verificationMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    verified?: true
    verifiedAt?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
    lastSentAt?: true
    sendAttempts?: true
  }

  export type Email_verificationCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    verified?: true
    verifiedAt?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
    lastSentAt?: true
    sendAttempts?: true
    _all?: true
  }

  export type Email_verificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification to aggregate.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_verifications
    **/
    _count?: true | Email_verificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Email_verificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Email_verificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_verificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_verificationMaxAggregateInputType
  }

  export type GetEmail_verificationAggregateType<T extends Email_verificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_verification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_verification[P]>
      : GetScalarType<T[P], AggregateEmail_verification[P]>
  }




  export type email_verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verificationWhereInput
    orderBy?: email_verificationOrderByWithAggregationInput | email_verificationOrderByWithAggregationInput[]
    by: Email_verificationScalarFieldEnum[] | Email_verificationScalarFieldEnum
    having?: email_verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_verificationCountAggregateInputType | true
    _avg?: Email_verificationAvgAggregateInputType
    _sum?: Email_verificationSumAggregateInputType
    _min?: Email_verificationMinAggregateInputType
    _max?: Email_verificationMaxAggregateInputType
  }

  export type Email_verificationGroupByOutputType = {
    id: string
    userId: string
    code: string | null
    verified: boolean
    verifiedAt: Date | null
    expiresIn: Date | null
    createdAt: Date
    updatedAt: Date
    lastSentAt: Date | null
    sendAttempts: number
    _count: Email_verificationCountAggregateOutputType | null
    _avg: Email_verificationAvgAggregateOutputType | null
    _sum: Email_verificationSumAggregateOutputType | null
    _min: Email_verificationMinAggregateOutputType | null
    _max: Email_verificationMaxAggregateOutputType | null
  }

  type GetEmail_verificationGroupByPayload<T extends email_verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_verificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_verificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_verificationGroupByOutputType[P]>
            : GetScalarType<T[P], Email_verificationGroupByOutputType[P]>
        }
      >
    >


  export type email_verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    verified?: boolean
    verifiedAt?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSentAt?: boolean
    sendAttempts?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification"]>



  export type email_verificationSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    verified?: boolean
    verifiedAt?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSentAt?: boolean
    sendAttempts?: boolean
  }

  export type email_verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "verified" | "verifiedAt" | "expiresIn" | "createdAt" | "updatedAt" | "lastSentAt" | "sendAttempts", ExtArgs["result"]["email_verification"]>
  export type email_verificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $email_verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_verification"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string | null
      verified: boolean
      verifiedAt: Date | null
      expiresIn: Date | null
      createdAt: Date
      updatedAt: Date
      lastSentAt: Date | null
      sendAttempts: number
    }, ExtArgs["result"]["email_verification"]>
    composites: {}
  }

  type email_verificationGetPayload<S extends boolean | null | undefined | email_verificationDefaultArgs> = $Result.GetResult<Prisma.$email_verificationPayload, S>

  type email_verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_verificationCountAggregateInputType | true
    }

  export interface email_verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_verification'], meta: { name: 'email_verification' } }
    /**
     * Find zero or one Email_verification that matches the filter.
     * @param {email_verificationFindUniqueArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_verificationFindUniqueArgs>(args: SelectSubset<T, email_verificationFindUniqueArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_verificationFindUniqueOrThrowArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, email_verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindFirstArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_verificationFindFirstArgs>(args?: SelectSubset<T, email_verificationFindFirstArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindFirstOrThrowArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, email_verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_verifications
     * const email_verifications = await prisma.email_verification.findMany()
     * 
     * // Get first 10 Email_verifications
     * const email_verifications = await prisma.email_verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_verificationWithIdOnly = await prisma.email_verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_verificationFindManyArgs>(args?: SelectSubset<T, email_verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_verification.
     * @param {email_verificationCreateArgs} args - Arguments to create a Email_verification.
     * @example
     * // Create one Email_verification
     * const Email_verification = await prisma.email_verification.create({
     *   data: {
     *     // ... data to create a Email_verification
     *   }
     * })
     * 
     */
    create<T extends email_verificationCreateArgs>(args: SelectSubset<T, email_verificationCreateArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_verifications.
     * @param {email_verificationCreateManyArgs} args - Arguments to create many Email_verifications.
     * @example
     * // Create many Email_verifications
     * const email_verification = await prisma.email_verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_verificationCreateManyArgs>(args?: SelectSubset<T, email_verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email_verification.
     * @param {email_verificationDeleteArgs} args - Arguments to delete one Email_verification.
     * @example
     * // Delete one Email_verification
     * const Email_verification = await prisma.email_verification.delete({
     *   where: {
     *     // ... filter to delete one Email_verification
     *   }
     * })
     * 
     */
    delete<T extends email_verificationDeleteArgs>(args: SelectSubset<T, email_verificationDeleteArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_verification.
     * @param {email_verificationUpdateArgs} args - Arguments to update one Email_verification.
     * @example
     * // Update one Email_verification
     * const email_verification = await prisma.email_verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_verificationUpdateArgs>(args: SelectSubset<T, email_verificationUpdateArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_verifications.
     * @param {email_verificationDeleteManyArgs} args - Arguments to filter Email_verifications to delete.
     * @example
     * // Delete a few Email_verifications
     * const { count } = await prisma.email_verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_verificationDeleteManyArgs>(args?: SelectSubset<T, email_verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_verifications
     * const email_verification = await prisma.email_verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_verificationUpdateManyArgs>(args: SelectSubset<T, email_verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email_verification.
     * @param {email_verificationUpsertArgs} args - Arguments to update or create a Email_verification.
     * @example
     * // Update or create a Email_verification
     * const email_verification = await prisma.email_verification.upsert({
     *   create: {
     *     // ... data to create a Email_verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_verification we want to update
     *   }
     * })
     */
    upsert<T extends email_verificationUpsertArgs>(args: SelectSubset<T, email_verificationUpsertArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationCountArgs} args - Arguments to filter Email_verifications to count.
     * @example
     * // Count the number of Email_verifications
     * const count = await prisma.email_verification.count({
     *   where: {
     *     // ... the filter for the Email_verifications we want to count
     *   }
     * })
    **/
    count<T extends email_verificationCountArgs>(
      args?: Subset<T, email_verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_verificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_verificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Email_verificationAggregateArgs>(args: Subset<T, Email_verificationAggregateArgs>): Prisma.PrismaPromise<GetEmail_verificationAggregateType<T>>

    /**
     * Group by Email_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends email_verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_verificationGroupByArgs['orderBy'] }
        : { orderBy?: email_verificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, email_verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_verificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_verification model
   */
  readonly fields: email_verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the email_verification model
   */
  interface email_verificationFieldRefs {
    readonly id: FieldRef<"email_verification", 'String'>
    readonly userId: FieldRef<"email_verification", 'String'>
    readonly code: FieldRef<"email_verification", 'String'>
    readonly verified: FieldRef<"email_verification", 'Boolean'>
    readonly verifiedAt: FieldRef<"email_verification", 'DateTime'>
    readonly expiresIn: FieldRef<"email_verification", 'DateTime'>
    readonly createdAt: FieldRef<"email_verification", 'DateTime'>
    readonly updatedAt: FieldRef<"email_verification", 'DateTime'>
    readonly lastSentAt: FieldRef<"email_verification", 'DateTime'>
    readonly sendAttempts: FieldRef<"email_verification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * email_verification findUnique
   */
  export type email_verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification findUniqueOrThrow
   */
  export type email_verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification findFirst
   */
  export type email_verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification findFirstOrThrow
   */
  export type email_verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification findMany
   */
  export type email_verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification create
   */
  export type email_verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * The data needed to create a email_verification.
     */
    data: XOR<email_verificationCreateInput, email_verificationUncheckedCreateInput>
  }

  /**
   * email_verification createMany
   */
  export type email_verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_verifications.
     */
    data: email_verificationCreateManyInput | email_verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_verification update
   */
  export type email_verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * The data needed to update a email_verification.
     */
    data: XOR<email_verificationUpdateInput, email_verificationUncheckedUpdateInput>
    /**
     * Choose, which email_verification to update.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification updateMany
   */
  export type email_verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_verifications.
     */
    data: XOR<email_verificationUpdateManyMutationInput, email_verificationUncheckedUpdateManyInput>
    /**
     * Filter which email_verifications to update
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to update.
     */
    limit?: number
  }

  /**
   * email_verification upsert
   */
  export type email_verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * The filter to search for the email_verification to update in case it exists.
     */
    where: email_verificationWhereUniqueInput
    /**
     * In case the email_verification found by the `where` argument doesn't exist, create a new email_verification with this data.
     */
    create: XOR<email_verificationCreateInput, email_verificationUncheckedCreateInput>
    /**
     * In case the email_verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_verificationUpdateInput, email_verificationUncheckedUpdateInput>
  }

  /**
   * email_verification delete
   */
  export type email_verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter which email_verification to delete.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification deleteMany
   */
  export type email_verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verifications to delete
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to delete.
     */
    limit?: number
  }

  /**
   * email_verification without action
   */
  export type email_verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
  }


  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat_participant?: boolean | chat$chat_participantArgs<ExtArgs>
    message?: boolean | chat$messageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>



  export type chatSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type chatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_participant?: boolean | chat$chat_participantArgs<ExtArgs>
    message?: boolean | chat$messageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat"
    objects: {
      chat_participant: Prisma.$chat_participantPayload<ExtArgs>[]
      message: Prisma.$messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<Prisma.$chatPayload, S>

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatFindUniqueArgs>(args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatFindFirstArgs>(args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatFindManyArgs>(args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends chatCreateArgs>(args: SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatCreateManyArgs>(args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends chatDeleteArgs>(args: SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatUpdateArgs>(args: SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatDeleteManyArgs>(args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatUpdateManyArgs>(args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends chatUpsertArgs>(args: SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat model
   */
  readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_participant<T extends chat$chat_participantArgs<ExtArgs> = {}>(args?: Subset<T, chat$chat_participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message<T extends chat$messageArgs<ExtArgs> = {}>(args?: Subset<T, chat$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly id: FieldRef<"chat", 'String'>
    readonly createdAt: FieldRef<"chat", 'DateTime'>
    readonly updatedAt: FieldRef<"chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>
  }

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>
  }

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chat.chat_participant
   */
  export type chat$chat_participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    where?: chat_participantWhereInput
    orderBy?: chat_participantOrderByWithRelationInput | chat_participantOrderByWithRelationInput[]
    cursor?: chat_participantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_participantScalarFieldEnum | Chat_participantScalarFieldEnum[]
  }

  /**
   * chat.message
   */
  export type chat$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
  }


  /**
   * Model chat_participant
   */

  export type AggregateChat_participant = {
    _count: Chat_participantCountAggregateOutputType | null
    _min: Chat_participantMinAggregateOutputType | null
    _max: Chat_participantMaxAggregateOutputType | null
  }

  export type Chat_participantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chatId: string | null
  }

  export type Chat_participantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chatId: string | null
  }

  export type Chat_participantCountAggregateOutputType = {
    id: number
    userId: number
    chatId: number
    _all: number
  }


  export type Chat_participantMinAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
  }

  export type Chat_participantMaxAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
  }

  export type Chat_participantCountAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    _all?: true
  }

  export type Chat_participantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_participant to aggregate.
     */
    where?: chat_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_participants to fetch.
     */
    orderBy?: chat_participantOrderByWithRelationInput | chat_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_participants
    **/
    _count?: true | Chat_participantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_participantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_participantMaxAggregateInputType
  }

  export type GetChat_participantAggregateType<T extends Chat_participantAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_participant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_participant[P]>
      : GetScalarType<T[P], AggregateChat_participant[P]>
  }




  export type chat_participantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_participantWhereInput
    orderBy?: chat_participantOrderByWithAggregationInput | chat_participantOrderByWithAggregationInput[]
    by: Chat_participantScalarFieldEnum[] | Chat_participantScalarFieldEnum
    having?: chat_participantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_participantCountAggregateInputType | true
    _min?: Chat_participantMinAggregateInputType
    _max?: Chat_participantMaxAggregateInputType
  }

  export type Chat_participantGroupByOutputType = {
    id: string
    userId: string
    chatId: string
    _count: Chat_participantCountAggregateOutputType | null
    _min: Chat_participantMinAggregateOutputType | null
    _max: Chat_participantMaxAggregateOutputType | null
  }

  type GetChat_participantGroupByPayload<T extends chat_participantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_participantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_participantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_participantGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_participantGroupByOutputType[P]>
        }
      >
    >


  export type chat_participantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_participant"]>



  export type chat_participantSelectScalar = {
    id?: boolean
    userId?: boolean
    chatId?: boolean
  }

  export type chat_participantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatId", ExtArgs["result"]["chat_participant"]>
  export type chat_participantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $chat_participantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_participant"
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chatId: string
    }, ExtArgs["result"]["chat_participant"]>
    composites: {}
  }

  type chat_participantGetPayload<S extends boolean | null | undefined | chat_participantDefaultArgs> = $Result.GetResult<Prisma.$chat_participantPayload, S>

  type chat_participantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_participantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_participantCountAggregateInputType | true
    }

  export interface chat_participantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_participant'], meta: { name: 'chat_participant' } }
    /**
     * Find zero or one Chat_participant that matches the filter.
     * @param {chat_participantFindUniqueArgs} args - Arguments to find a Chat_participant
     * @example
     * // Get one Chat_participant
     * const chat_participant = await prisma.chat_participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_participantFindUniqueArgs>(args: SelectSubset<T, chat_participantFindUniqueArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_participantFindUniqueOrThrowArgs} args - Arguments to find a Chat_participant
     * @example
     * // Get one Chat_participant
     * const chat_participant = await prisma.chat_participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_participantFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_participantFindFirstArgs} args - Arguments to find a Chat_participant
     * @example
     * // Get one Chat_participant
     * const chat_participant = await prisma.chat_participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_participantFindFirstArgs>(args?: SelectSubset<T, chat_participantFindFirstArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_participantFindFirstOrThrowArgs} args - Arguments to find a Chat_participant
     * @example
     * // Get one Chat_participant
     * const chat_participant = await prisma.chat_participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_participantFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_participantFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_participantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_participants
     * const chat_participants = await prisma.chat_participant.findMany()
     * 
     * // Get first 10 Chat_participants
     * const chat_participants = await prisma.chat_participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_participantWithIdOnly = await prisma.chat_participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_participantFindManyArgs>(args?: SelectSubset<T, chat_participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_participant.
     * @param {chat_participantCreateArgs} args - Arguments to create a Chat_participant.
     * @example
     * // Create one Chat_participant
     * const Chat_participant = await prisma.chat_participant.create({
     *   data: {
     *     // ... data to create a Chat_participant
     *   }
     * })
     * 
     */
    create<T extends chat_participantCreateArgs>(args: SelectSubset<T, chat_participantCreateArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_participants.
     * @param {chat_participantCreateManyArgs} args - Arguments to create many Chat_participants.
     * @example
     * // Create many Chat_participants
     * const chat_participant = await prisma.chat_participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_participantCreateManyArgs>(args?: SelectSubset<T, chat_participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat_participant.
     * @param {chat_participantDeleteArgs} args - Arguments to delete one Chat_participant.
     * @example
     * // Delete one Chat_participant
     * const Chat_participant = await prisma.chat_participant.delete({
     *   where: {
     *     // ... filter to delete one Chat_participant
     *   }
     * })
     * 
     */
    delete<T extends chat_participantDeleteArgs>(args: SelectSubset<T, chat_participantDeleteArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_participant.
     * @param {chat_participantUpdateArgs} args - Arguments to update one Chat_participant.
     * @example
     * // Update one Chat_participant
     * const chat_participant = await prisma.chat_participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_participantUpdateArgs>(args: SelectSubset<T, chat_participantUpdateArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_participants.
     * @param {chat_participantDeleteManyArgs} args - Arguments to filter Chat_participants to delete.
     * @example
     * // Delete a few Chat_participants
     * const { count } = await prisma.chat_participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_participantDeleteManyArgs>(args?: SelectSubset<T, chat_participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_participantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_participants
     * const chat_participant = await prisma.chat_participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_participantUpdateManyArgs>(args: SelectSubset<T, chat_participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat_participant.
     * @param {chat_participantUpsertArgs} args - Arguments to update or create a Chat_participant.
     * @example
     * // Update or create a Chat_participant
     * const chat_participant = await prisma.chat_participant.upsert({
     *   create: {
     *     // ... data to create a Chat_participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_participant we want to update
     *   }
     * })
     */
    upsert<T extends chat_participantUpsertArgs>(args: SelectSubset<T, chat_participantUpsertArgs<ExtArgs>>): Prisma__chat_participantClient<$Result.GetResult<Prisma.$chat_participantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_participantCountArgs} args - Arguments to filter Chat_participants to count.
     * @example
     * // Count the number of Chat_participants
     * const count = await prisma.chat_participant.count({
     *   where: {
     *     // ... the filter for the Chat_participants we want to count
     *   }
     * })
    **/
    count<T extends chat_participantCountArgs>(
      args?: Subset<T, chat_participantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_participantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_participantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chat_participantAggregateArgs>(args: Subset<T, Chat_participantAggregateArgs>): Prisma.PrismaPromise<GetChat_participantAggregateType<T>>

    /**
     * Group by Chat_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_participantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chat_participantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_participantGroupByArgs['orderBy'] }
        : { orderBy?: chat_participantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chat_participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_participantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_participant model
   */
  readonly fields: chat_participantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_participantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends chatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatDefaultArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat_participant model
   */
  interface chat_participantFieldRefs {
    readonly id: FieldRef<"chat_participant", 'String'>
    readonly userId: FieldRef<"chat_participant", 'String'>
    readonly chatId: FieldRef<"chat_participant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chat_participant findUnique
   */
  export type chat_participantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * Filter, which chat_participant to fetch.
     */
    where: chat_participantWhereUniqueInput
  }

  /**
   * chat_participant findUniqueOrThrow
   */
  export type chat_participantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * Filter, which chat_participant to fetch.
     */
    where: chat_participantWhereUniqueInput
  }

  /**
   * chat_participant findFirst
   */
  export type chat_participantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * Filter, which chat_participant to fetch.
     */
    where?: chat_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_participants to fetch.
     */
    orderBy?: chat_participantOrderByWithRelationInput | chat_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_participants.
     */
    cursor?: chat_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_participants.
     */
    distinct?: Chat_participantScalarFieldEnum | Chat_participantScalarFieldEnum[]
  }

  /**
   * chat_participant findFirstOrThrow
   */
  export type chat_participantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * Filter, which chat_participant to fetch.
     */
    where?: chat_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_participants to fetch.
     */
    orderBy?: chat_participantOrderByWithRelationInput | chat_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_participants.
     */
    cursor?: chat_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_participants.
     */
    distinct?: Chat_participantScalarFieldEnum | Chat_participantScalarFieldEnum[]
  }

  /**
   * chat_participant findMany
   */
  export type chat_participantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * Filter, which chat_participants to fetch.
     */
    where?: chat_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_participants to fetch.
     */
    orderBy?: chat_participantOrderByWithRelationInput | chat_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_participants.
     */
    cursor?: chat_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_participants.
     */
    skip?: number
    distinct?: Chat_participantScalarFieldEnum | Chat_participantScalarFieldEnum[]
  }

  /**
   * chat_participant create
   */
  export type chat_participantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_participant.
     */
    data: XOR<chat_participantCreateInput, chat_participantUncheckedCreateInput>
  }

  /**
   * chat_participant createMany
   */
  export type chat_participantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_participants.
     */
    data: chat_participantCreateManyInput | chat_participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_participant update
   */
  export type chat_participantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_participant.
     */
    data: XOR<chat_participantUpdateInput, chat_participantUncheckedUpdateInput>
    /**
     * Choose, which chat_participant to update.
     */
    where: chat_participantWhereUniqueInput
  }

  /**
   * chat_participant updateMany
   */
  export type chat_participantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_participants.
     */
    data: XOR<chat_participantUpdateManyMutationInput, chat_participantUncheckedUpdateManyInput>
    /**
     * Filter which chat_participants to update
     */
    where?: chat_participantWhereInput
    /**
     * Limit how many chat_participants to update.
     */
    limit?: number
  }

  /**
   * chat_participant upsert
   */
  export type chat_participantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_participant to update in case it exists.
     */
    where: chat_participantWhereUniqueInput
    /**
     * In case the chat_participant found by the `where` argument doesn't exist, create a new chat_participant with this data.
     */
    create: XOR<chat_participantCreateInput, chat_participantUncheckedCreateInput>
    /**
     * In case the chat_participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_participantUpdateInput, chat_participantUncheckedUpdateInput>
  }

  /**
   * chat_participant delete
   */
  export type chat_participantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
    /**
     * Filter which chat_participant to delete.
     */
    where: chat_participantWhereUniqueInput
  }

  /**
   * chat_participant deleteMany
   */
  export type chat_participantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_participants to delete
     */
    where?: chat_participantWhereInput
    /**
     * Limit how many chat_participants to delete.
     */
    limit?: number
  }

  /**
   * chat_participant without action
   */
  export type chat_participantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_participant
     */
    select?: chat_participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_participant
     */
    omit?: chat_participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_participantInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    senderId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    senderId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message: number
    senderId: number
    chatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    message?: true
    senderId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message?: true
    senderId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message?: true
    senderId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    message: string | null
    senderId: string
    chatId: string
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    senderId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type messageSelectScalar = {
    id?: boolean
    message?: boolean
    senderId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "senderId" | "chatId" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>
      sender: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string | null
      senderId: string
      chatId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends chatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatDefaultArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'String'>
    readonly message: FieldRef<"message", 'String'>
    readonly senderId: FieldRef<"message", 'String'>
    readonly chatId: FieldRef<"message", 'String'>
    readonly createdAt: FieldRef<"message", 'DateTime'>
    readonly updatedAt: FieldRef<"message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
  }


  /**
   * Model invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    inviterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    inviterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    token: number
    inviterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    inviterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    inviterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    inviterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invitation to aggregate.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type invitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationWhereInput
    orderBy?: invitationOrderByWithAggregationInput | invitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: invitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    email: string
    token: string
    inviterId: string
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends invitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type invitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    inviterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inviter?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>



  export type invitationSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    inviterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type invitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "inviterId" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type invitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $invitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invitation"
    objects: {
      inviter: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      inviterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type invitationGetPayload<S extends boolean | null | undefined | invitationDefaultArgs> = $Result.GetResult<Prisma.$invitationPayload, S>

  type invitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface invitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invitation'], meta: { name: 'invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {invitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invitationFindUniqueArgs>(args: SelectSubset<T, invitationFindUniqueArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invitationFindUniqueOrThrowArgs>(args: SelectSubset<T, invitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invitationFindFirstArgs>(args?: SelectSubset<T, invitationFindFirstArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invitationFindFirstOrThrowArgs>(args?: SelectSubset<T, invitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invitationFindManyArgs>(args?: SelectSubset<T, invitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {invitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends invitationCreateArgs>(args: SelectSubset<T, invitationCreateArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {invitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invitationCreateManyArgs>(args?: SelectSubset<T, invitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invitation.
     * @param {invitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends invitationDeleteArgs>(args: SelectSubset<T, invitationDeleteArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {invitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invitationUpdateArgs>(args: SelectSubset<T, invitationUpdateArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {invitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invitationDeleteManyArgs>(args?: SelectSubset<T, invitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invitationUpdateManyArgs>(args: SelectSubset<T, invitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitation.
     * @param {invitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends invitationUpsertArgs>(args: SelectSubset<T, invitationUpsertArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends invitationCountArgs>(
      args?: Subset<T, invitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invitationGroupByArgs['orderBy'] }
        : { orderBy?: invitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invitation model
   */
  readonly fields: invitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invitation model
   */
  interface invitationFieldRefs {
    readonly id: FieldRef<"invitation", 'String'>
    readonly email: FieldRef<"invitation", 'String'>
    readonly token: FieldRef<"invitation", 'String'>
    readonly inviterId: FieldRef<"invitation", 'String'>
    readonly createdAt: FieldRef<"invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invitation findUnique
   */
  export type invitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation findUniqueOrThrow
   */
  export type invitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation findFirst
   */
  export type invitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invitations.
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * invitation findFirstOrThrow
   */
  export type invitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invitations.
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * invitation findMany
   */
  export type invitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invitations.
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * invitation create
   */
  export type invitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * The data needed to create a invitation.
     */
    data: XOR<invitationCreateInput, invitationUncheckedCreateInput>
  }

  /**
   * invitation createMany
   */
  export type invitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invitations.
     */
    data: invitationCreateManyInput | invitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invitation update
   */
  export type invitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * The data needed to update a invitation.
     */
    data: XOR<invitationUpdateInput, invitationUncheckedUpdateInput>
    /**
     * Choose, which invitation to update.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation updateMany
   */
  export type invitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invitations.
     */
    data: XOR<invitationUpdateManyMutationInput, invitationUncheckedUpdateManyInput>
    /**
     * Filter which invitations to update
     */
    where?: invitationWhereInput
    /**
     * Limit how many invitations to update.
     */
    limit?: number
  }

  /**
   * invitation upsert
   */
  export type invitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * The filter to search for the invitation to update in case it exists.
     */
    where: invitationWhereUniqueInput
    /**
     * In case the invitation found by the `where` argument doesn't exist, create a new invitation with this data.
     */
    create: XOR<invitationCreateInput, invitationUncheckedCreateInput>
    /**
     * In case the invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invitationUpdateInput, invitationUncheckedUpdateInput>
  }

  /**
   * invitation delete
   */
  export type invitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter which invitation to delete.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation deleteMany
   */
  export type invitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invitations to delete
     */
    where?: invitationWhereInput
    /**
     * Limit how many invitations to delete.
     */
    limit?: number
  }

  /**
   * invitation without action
   */
  export type invitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    profilePic: 'profilePic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Reset_passwordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    sendAttempts: 'sendAttempts',
    lastSentAt: 'lastSentAt',
    resetedAt: 'resetedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresIn: 'expiresIn'
  };

  export type Reset_passwordScalarFieldEnum = (typeof Reset_passwordScalarFieldEnum)[keyof typeof Reset_passwordScalarFieldEnum]


  export const Email_verificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    expiresIn: 'expiresIn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastSentAt: 'lastSentAt',
    sendAttempts: 'sendAttempts'
  };

  export type Email_verificationScalarFieldEnum = (typeof Email_verificationScalarFieldEnum)[keyof typeof Email_verificationScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const Chat_participantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatId: 'chatId'
  };

  export type Chat_participantScalarFieldEnum = (typeof Chat_participantScalarFieldEnum)[keyof typeof Chat_participantScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    senderId: 'senderId',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    inviterId: 'inviterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    profilePic: 'profilePic'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const reset_passwordOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code'
  };

  export type reset_passwordOrderByRelevanceFieldEnum = (typeof reset_passwordOrderByRelevanceFieldEnum)[keyof typeof reset_passwordOrderByRelevanceFieldEnum]


  export const email_verificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code'
  };

  export type email_verificationOrderByRelevanceFieldEnum = (typeof email_verificationOrderByRelevanceFieldEnum)[keyof typeof email_verificationOrderByRelevanceFieldEnum]


  export const chatOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type chatOrderByRelevanceFieldEnum = (typeof chatOrderByRelevanceFieldEnum)[keyof typeof chatOrderByRelevanceFieldEnum]


  export const chat_participantOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatId: 'chatId'
  };

  export type chat_participantOrderByRelevanceFieldEnum = (typeof chat_participantOrderByRelevanceFieldEnum)[keyof typeof chat_participantOrderByRelevanceFieldEnum]


  export const messageOrderByRelevanceFieldEnum: {
    id: 'id',
    message: 'message',
    senderId: 'senderId',
    chatId: 'chatId'
  };

  export type messageOrderByRelevanceFieldEnum = (typeof messageOrderByRelevanceFieldEnum)[keyof typeof messageOrderByRelevanceFieldEnum]


  export const invitationOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    inviterId: 'inviterId'
  };

  export type invitationOrderByRelevanceFieldEnum = (typeof invitationOrderByRelevanceFieldEnum)[keyof typeof invitationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    firstname?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profilePic?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    chat_parcitipant?: Chat_participantListRelationFilter
    email_verification?: XOR<Email_verificationNullableScalarRelationFilter, email_verificationWhereInput> | null
    invitation?: InvitationListRelationFilter
    message?: MessageListRelationFilter
    reset_password?: XOR<Reset_passwordNullableScalarRelationFilter, reset_passwordWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat_parcitipant?: chat_participantOrderByRelationAggregateInput
    email_verification?: email_verificationOrderByWithRelationInput
    invitation?: invitationOrderByRelationAggregateInput
    message?: messageOrderByRelationAggregateInput
    reset_password?: reset_passwordOrderByWithRelationInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    firstname?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profilePic?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    chat_parcitipant?: Chat_participantListRelationFilter
    email_verification?: XOR<Email_verificationNullableScalarRelationFilter, email_verificationWhereInput> | null
    invitation?: InvitationListRelationFilter
    message?: MessageListRelationFilter
    reset_password?: XOR<Reset_passwordNullableScalarRelationFilter, reset_passwordWhereInput> | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    firstname?: StringWithAggregatesFilter<"user"> | string
    lastname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    profilePic?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type reset_passwordWhereInput = {
    AND?: reset_passwordWhereInput | reset_passwordWhereInput[]
    OR?: reset_passwordWhereInput[]
    NOT?: reset_passwordWhereInput | reset_passwordWhereInput[]
    id?: StringFilter<"reset_password"> | string
    userId?: StringFilter<"reset_password"> | string
    code?: StringNullableFilter<"reset_password"> | string | null
    sendAttempts?: IntFilter<"reset_password"> | number
    lastSentAt?: DateTimeNullableFilter<"reset_password"> | Date | string | null
    resetedAt?: DateTimeNullableFilter<"reset_password"> | Date | string | null
    createdAt?: DateTimeFilter<"reset_password"> | Date | string
    updatedAt?: DateTimeFilter<"reset_password"> | Date | string
    expiresIn?: DateTimeNullableFilter<"reset_password"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type reset_passwordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrderInput | SortOrder
    sendAttempts?: SortOrder
    lastSentAt?: SortOrderInput | SortOrder
    resetedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresIn?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: reset_passwordOrderByRelevanceInput
  }

  export type reset_passwordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: reset_passwordWhereInput | reset_passwordWhereInput[]
    OR?: reset_passwordWhereInput[]
    NOT?: reset_passwordWhereInput | reset_passwordWhereInput[]
    code?: StringNullableFilter<"reset_password"> | string | null
    sendAttempts?: IntFilter<"reset_password"> | number
    lastSentAt?: DateTimeNullableFilter<"reset_password"> | Date | string | null
    resetedAt?: DateTimeNullableFilter<"reset_password"> | Date | string | null
    createdAt?: DateTimeFilter<"reset_password"> | Date | string
    updatedAt?: DateTimeFilter<"reset_password"> | Date | string
    expiresIn?: DateTimeNullableFilter<"reset_password"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId">

  export type reset_passwordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrderInput | SortOrder
    sendAttempts?: SortOrder
    lastSentAt?: SortOrderInput | SortOrder
    resetedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresIn?: SortOrderInput | SortOrder
    _count?: reset_passwordCountOrderByAggregateInput
    _avg?: reset_passwordAvgOrderByAggregateInput
    _max?: reset_passwordMaxOrderByAggregateInput
    _min?: reset_passwordMinOrderByAggregateInput
    _sum?: reset_passwordSumOrderByAggregateInput
  }

  export type reset_passwordScalarWhereWithAggregatesInput = {
    AND?: reset_passwordScalarWhereWithAggregatesInput | reset_passwordScalarWhereWithAggregatesInput[]
    OR?: reset_passwordScalarWhereWithAggregatesInput[]
    NOT?: reset_passwordScalarWhereWithAggregatesInput | reset_passwordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reset_password"> | string
    userId?: StringWithAggregatesFilter<"reset_password"> | string
    code?: StringNullableWithAggregatesFilter<"reset_password"> | string | null
    sendAttempts?: IntWithAggregatesFilter<"reset_password"> | number
    lastSentAt?: DateTimeNullableWithAggregatesFilter<"reset_password"> | Date | string | null
    resetedAt?: DateTimeNullableWithAggregatesFilter<"reset_password"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"reset_password"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"reset_password"> | Date | string
    expiresIn?: DateTimeNullableWithAggregatesFilter<"reset_password"> | Date | string | null
  }

  export type email_verificationWhereInput = {
    AND?: email_verificationWhereInput | email_verificationWhereInput[]
    OR?: email_verificationWhereInput[]
    NOT?: email_verificationWhereInput | email_verificationWhereInput[]
    id?: StringFilter<"email_verification"> | string
    userId?: StringFilter<"email_verification"> | string
    code?: StringNullableFilter<"email_verification"> | string | null
    verified?: BoolFilter<"email_verification"> | boolean
    verifiedAt?: DateTimeNullableFilter<"email_verification"> | Date | string | null
    expiresIn?: DateTimeNullableFilter<"email_verification"> | Date | string | null
    createdAt?: DateTimeFilter<"email_verification"> | Date | string
    updatedAt?: DateTimeFilter<"email_verification"> | Date | string
    lastSentAt?: DateTimeNullableFilter<"email_verification"> | Date | string | null
    sendAttempts?: IntFilter<"email_verification"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type email_verificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrderInput | SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    expiresIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSentAt?: SortOrderInput | SortOrder
    sendAttempts?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: email_verificationOrderByRelevanceInput
  }

  export type email_verificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: email_verificationWhereInput | email_verificationWhereInput[]
    OR?: email_verificationWhereInput[]
    NOT?: email_verificationWhereInput | email_verificationWhereInput[]
    code?: StringNullableFilter<"email_verification"> | string | null
    verified?: BoolFilter<"email_verification"> | boolean
    verifiedAt?: DateTimeNullableFilter<"email_verification"> | Date | string | null
    expiresIn?: DateTimeNullableFilter<"email_verification"> | Date | string | null
    createdAt?: DateTimeFilter<"email_verification"> | Date | string
    updatedAt?: DateTimeFilter<"email_verification"> | Date | string
    lastSentAt?: DateTimeNullableFilter<"email_verification"> | Date | string | null
    sendAttempts?: IntFilter<"email_verification"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId">

  export type email_verificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrderInput | SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    expiresIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSentAt?: SortOrderInput | SortOrder
    sendAttempts?: SortOrder
    _count?: email_verificationCountOrderByAggregateInput
    _avg?: email_verificationAvgOrderByAggregateInput
    _max?: email_verificationMaxOrderByAggregateInput
    _min?: email_verificationMinOrderByAggregateInput
    _sum?: email_verificationSumOrderByAggregateInput
  }

  export type email_verificationScalarWhereWithAggregatesInput = {
    AND?: email_verificationScalarWhereWithAggregatesInput | email_verificationScalarWhereWithAggregatesInput[]
    OR?: email_verificationScalarWhereWithAggregatesInput[]
    NOT?: email_verificationScalarWhereWithAggregatesInput | email_verificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"email_verification"> | string
    userId?: StringWithAggregatesFilter<"email_verification"> | string
    code?: StringNullableWithAggregatesFilter<"email_verification"> | string | null
    verified?: BoolWithAggregatesFilter<"email_verification"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"email_verification"> | Date | string | null
    expiresIn?: DateTimeNullableWithAggregatesFilter<"email_verification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
    lastSentAt?: DateTimeNullableWithAggregatesFilter<"email_verification"> | Date | string | null
    sendAttempts?: IntWithAggregatesFilter<"email_verification"> | number
  }

  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    id?: StringFilter<"chat"> | string
    createdAt?: DateTimeFilter<"chat"> | Date | string
    updatedAt?: DateTimeFilter<"chat"> | Date | string
    chat_participant?: Chat_participantListRelationFilter
    message?: MessageListRelationFilter
  }

  export type chatOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat_participant?: chat_participantOrderByRelationAggregateInput
    message?: messageOrderByRelationAggregateInput
    _relevance?: chatOrderByRelevanceInput
  }

  export type chatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    createdAt?: DateTimeFilter<"chat"> | Date | string
    updatedAt?: DateTimeFilter<"chat"> | Date | string
    chat_participant?: Chat_participantListRelationFilter
    message?: MessageListRelationFilter
  }, "id">

  export type chatOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chatCountOrderByAggregateInput
    _max?: chatMaxOrderByAggregateInput
    _min?: chatMinOrderByAggregateInput
  }

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    OR?: chatScalarWhereWithAggregatesInput[]
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chat"> | Date | string
  }

  export type chat_participantWhereInput = {
    AND?: chat_participantWhereInput | chat_participantWhereInput[]
    OR?: chat_participantWhereInput[]
    NOT?: chat_participantWhereInput | chat_participantWhereInput[]
    id?: StringFilter<"chat_participant"> | string
    userId?: StringFilter<"chat_participant"> | string
    chatId?: StringFilter<"chat_participant"> | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type chat_participantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    chat?: chatOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: chat_participantOrderByRelevanceInput
  }

  export type chat_participantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_chatId?: chat_participantUserIdChatIdCompoundUniqueInput
    AND?: chat_participantWhereInput | chat_participantWhereInput[]
    OR?: chat_participantWhereInput[]
    NOT?: chat_participantWhereInput | chat_participantWhereInput[]
    userId?: StringFilter<"chat_participant"> | string
    chatId?: StringFilter<"chat_participant"> | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId_chatId">

  export type chat_participantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    _count?: chat_participantCountOrderByAggregateInput
    _max?: chat_participantMaxOrderByAggregateInput
    _min?: chat_participantMinOrderByAggregateInput
  }

  export type chat_participantScalarWhereWithAggregatesInput = {
    AND?: chat_participantScalarWhereWithAggregatesInput | chat_participantScalarWhereWithAggregatesInput[]
    OR?: chat_participantScalarWhereWithAggregatesInput[]
    NOT?: chat_participantScalarWhereWithAggregatesInput | chat_participantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chat_participant"> | string
    userId?: StringWithAggregatesFilter<"chat_participant"> | string
    chatId?: StringWithAggregatesFilter<"chat_participant"> | string
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: StringFilter<"message"> | string
    message?: StringNullableFilter<"message"> | string | null
    senderId?: StringFilter<"message"> | string
    chatId?: StringFilter<"message"> | string
    createdAt?: DateTimeFilter<"message"> | Date | string
    updatedAt?: DateTimeFilter<"message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    sender?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: chatOrderByWithRelationInput
    sender?: userOrderByWithRelationInput
    _relevance?: messageOrderByRelevanceInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    message?: StringNullableFilter<"message"> | string | null
    senderId?: StringFilter<"message"> | string
    chatId?: StringFilter<"message"> | string
    createdAt?: DateTimeFilter<"message"> | Date | string
    updatedAt?: DateTimeFilter<"message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    sender?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: messageCountOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"message"> | string
    message?: StringNullableWithAggregatesFilter<"message"> | string | null
    senderId?: StringWithAggregatesFilter<"message"> | string
    chatId?: StringWithAggregatesFilter<"message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"message"> | Date | string
  }

  export type invitationWhereInput = {
    AND?: invitationWhereInput | invitationWhereInput[]
    OR?: invitationWhereInput[]
    NOT?: invitationWhereInput | invitationWhereInput[]
    id?: StringFilter<"invitation"> | string
    email?: StringFilter<"invitation"> | string
    token?: StringFilter<"invitation"> | string
    inviterId?: StringFilter<"invitation"> | string
    createdAt?: DateTimeFilter<"invitation"> | Date | string
    updatedAt?: DateTimeFilter<"invitation"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type invitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    inviterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviter?: userOrderByWithRelationInput
    _relevance?: invitationOrderByRelevanceInput
  }

  export type invitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    token?: string
    AND?: invitationWhereInput | invitationWhereInput[]
    OR?: invitationWhereInput[]
    NOT?: invitationWhereInput | invitationWhereInput[]
    inviterId?: StringFilter<"invitation"> | string
    createdAt?: DateTimeFilter<"invitation"> | Date | string
    updatedAt?: DateTimeFilter<"invitation"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "email" | "token">

  export type invitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    inviterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: invitationCountOrderByAggregateInput
    _max?: invitationMaxOrderByAggregateInput
    _min?: invitationMinOrderByAggregateInput
  }

  export type invitationScalarWhereWithAggregatesInput = {
    AND?: invitationScalarWhereWithAggregatesInput | invitationScalarWhereWithAggregatesInput[]
    OR?: invitationScalarWhereWithAggregatesInput[]
    NOT?: invitationScalarWhereWithAggregatesInput | invitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"invitation"> | string
    email?: StringWithAggregatesFilter<"invitation"> | string
    token?: StringWithAggregatesFilter<"invitation"> | string
    inviterId?: StringWithAggregatesFilter<"invitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"invitation"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantCreateNestedManyWithoutUserInput
    email_verification?: email_verificationCreateNestedOneWithoutUserInput
    invitation?: invitationCreateNestedManyWithoutInviterInput
    message?: messageCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantUncheckedCreateNestedManyWithoutUserInput
    email_verification?: email_verificationUncheckedCreateNestedOneWithoutUserInput
    invitation?: invitationUncheckedCreateNestedManyWithoutInviterInput
    message?: messageUncheckedCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUpdateOneWithoutUserNestedInput
    invitation?: invitationUpdateManyWithoutInviterNestedInput
    message?: messageUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUncheckedUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUncheckedUpdateOneWithoutUserNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutInviterNestedInput
    message?: messageUncheckedUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reset_passwordCreateInput = {
    id?: string
    code?: string | null
    sendAttempts?: number
    lastSentAt?: Date | string | null
    resetedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresIn?: Date | string | null
    user: userCreateNestedOneWithoutReset_passwordInput
  }

  export type reset_passwordUncheckedCreateInput = {
    id?: string
    userId: string
    code?: string | null
    sendAttempts?: number
    lastSentAt?: Date | string | null
    resetedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresIn?: Date | string | null
  }

  export type reset_passwordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutReset_passwordNestedInput
  }

  export type reset_passwordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reset_passwordCreateManyInput = {
    id?: string
    userId: string
    code?: string | null
    sendAttempts?: number
    lastSentAt?: Date | string | null
    resetedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresIn?: Date | string | null
  }

  export type reset_passwordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reset_passwordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_verificationCreateInput = {
    id?: string
    code?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    expiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSentAt?: Date | string | null
    sendAttempts?: number
    user: userCreateNestedOneWithoutEmail_verificationInput
  }

  export type email_verificationUncheckedCreateInput = {
    id?: string
    userId: string
    code?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    expiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSentAt?: Date | string | null
    sendAttempts?: number
  }

  export type email_verificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutEmail_verificationNestedInput
  }

  export type email_verificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
  }

  export type email_verificationCreateManyInput = {
    id?: string
    userId: string
    code?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    expiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSentAt?: Date | string | null
    sendAttempts?: number
  }

  export type email_verificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
  }

  export type email_verificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
  }

  export type chatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_participant?: chat_participantCreateNestedManyWithoutChatInput
    message?: messageCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_participant?: chat_participantUncheckedCreateNestedManyWithoutChatInput
    message?: messageUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_participant?: chat_participantUpdateManyWithoutChatNestedInput
    message?: messageUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_participant?: chat_participantUncheckedUpdateManyWithoutChatNestedInput
    message?: messageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_participantCreateInput = {
    id?: string
    chat: chatCreateNestedOneWithoutChat_participantInput
    user: userCreateNestedOneWithoutChat_parcitipantInput
  }

  export type chat_participantUncheckedCreateInput = {
    id?: string
    userId: string
    chatId: string
  }

  export type chat_participantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chat?: chatUpdateOneRequiredWithoutChat_participantNestedInput
    user?: userUpdateOneRequiredWithoutChat_parcitipantNestedInput
  }

  export type chat_participantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_participantCreateManyInput = {
    id?: string
    userId: string
    chatId: string
  }

  export type chat_participantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type chat_participantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type messageCreateInput = {
    id?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: chatCreateNestedOneWithoutMessageInput
    sender: userCreateNestedOneWithoutMessageInput
  }

  export type messageUncheckedCreateInput = {
    id?: string
    message?: string | null
    senderId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type messageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: chatUpdateOneRequiredWithoutMessageNestedInput
    sender?: userUpdateOneRequiredWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageCreateManyInput = {
    id?: string
    message?: string | null
    senderId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type messageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationCreateInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter: userCreateNestedOneWithoutInvitationInput
  }

  export type invitationUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    inviterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: userUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type invitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationCreateManyInput = {
    id?: string
    email: string
    token: string
    inviterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Chat_participantListRelationFilter = {
    every?: chat_participantWhereInput
    some?: chat_participantWhereInput
    none?: chat_participantWhereInput
  }

  export type Email_verificationNullableScalarRelationFilter = {
    is?: email_verificationWhereInput | null
    isNot?: email_verificationWhereInput | null
  }

  export type InvitationListRelationFilter = {
    every?: invitationWhereInput
    some?: invitationWhereInput
    none?: invitationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type Reset_passwordNullableScalarRelationFilter = {
    is?: reset_passwordWhereInput | null
    isNot?: reset_passwordWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chat_participantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type reset_passwordOrderByRelevanceInput = {
    fields: reset_passwordOrderByRelevanceFieldEnum | reset_passwordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reset_passwordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    sendAttempts?: SortOrder
    lastSentAt?: SortOrder
    resetedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresIn?: SortOrder
  }

  export type reset_passwordAvgOrderByAggregateInput = {
    sendAttempts?: SortOrder
  }

  export type reset_passwordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    sendAttempts?: SortOrder
    lastSentAt?: SortOrder
    resetedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresIn?: SortOrder
  }

  export type reset_passwordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    sendAttempts?: SortOrder
    lastSentAt?: SortOrder
    resetedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresIn?: SortOrder
  }

  export type reset_passwordSumOrderByAggregateInput = {
    sendAttempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type email_verificationOrderByRelevanceInput = {
    fields: email_verificationOrderByRelevanceFieldEnum | email_verificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type email_verificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSentAt?: SortOrder
    sendAttempts?: SortOrder
  }

  export type email_verificationAvgOrderByAggregateInput = {
    sendAttempts?: SortOrder
  }

  export type email_verificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSentAt?: SortOrder
    sendAttempts?: SortOrder
  }

  export type email_verificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSentAt?: SortOrder
    sendAttempts?: SortOrder
  }

  export type email_verificationSumOrderByAggregateInput = {
    sendAttempts?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type chatOrderByRelevanceInput = {
    fields: chatOrderByRelevanceFieldEnum | chatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chatCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chatMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: chatWhereInput
    isNot?: chatWhereInput
  }

  export type chat_participantOrderByRelevanceInput = {
    fields: chat_participantOrderByRelevanceFieldEnum | chat_participantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chat_participantUserIdChatIdCompoundUniqueInput = {
    userId: string
    chatId: string
  }

  export type chat_participantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type chat_participantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type chat_participantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type messageOrderByRelevanceInput = {
    fields: messageOrderByRelevanceFieldEnum | messageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invitationOrderByRelevanceInput = {
    fields: invitationOrderByRelevanceFieldEnum | invitationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type invitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    inviterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    inviterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    inviterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chat_participantCreateNestedManyWithoutUserInput = {
    create?: XOR<chat_participantCreateWithoutUserInput, chat_participantUncheckedCreateWithoutUserInput> | chat_participantCreateWithoutUserInput[] | chat_participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutUserInput | chat_participantCreateOrConnectWithoutUserInput[]
    createMany?: chat_participantCreateManyUserInputEnvelope
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
  }

  export type email_verificationCreateNestedOneWithoutUserInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput
    connect?: email_verificationWhereUniqueInput
  }

  export type invitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<invitationCreateWithoutInviterInput, invitationUncheckedCreateWithoutInviterInput> | invitationCreateWithoutInviterInput[] | invitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutInviterInput | invitationCreateOrConnectWithoutInviterInput[]
    createMany?: invitationCreateManyInviterInputEnvelope
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutSenderInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type reset_passwordCreateNestedOneWithoutUserInput = {
    create?: XOR<reset_passwordCreateWithoutUserInput, reset_passwordUncheckedCreateWithoutUserInput>
    connectOrCreate?: reset_passwordCreateOrConnectWithoutUserInput
    connect?: reset_passwordWhereUniqueInput
  }

  export type chat_participantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<chat_participantCreateWithoutUserInput, chat_participantUncheckedCreateWithoutUserInput> | chat_participantCreateWithoutUserInput[] | chat_participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutUserInput | chat_participantCreateOrConnectWithoutUserInput[]
    createMany?: chat_participantCreateManyUserInputEnvelope
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
  }

  export type email_verificationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput
    connect?: email_verificationWhereUniqueInput
  }

  export type invitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<invitationCreateWithoutInviterInput, invitationUncheckedCreateWithoutInviterInput> | invitationCreateWithoutInviterInput[] | invitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutInviterInput | invitationCreateOrConnectWithoutInviterInput[]
    createMany?: invitationCreateManyInviterInputEnvelope
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type reset_passwordUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<reset_passwordCreateWithoutUserInput, reset_passwordUncheckedCreateWithoutUserInput>
    connectOrCreate?: reset_passwordCreateOrConnectWithoutUserInput
    connect?: reset_passwordWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type chat_participantUpdateManyWithoutUserNestedInput = {
    create?: XOR<chat_participantCreateWithoutUserInput, chat_participantUncheckedCreateWithoutUserInput> | chat_participantCreateWithoutUserInput[] | chat_participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutUserInput | chat_participantCreateOrConnectWithoutUserInput[]
    upsert?: chat_participantUpsertWithWhereUniqueWithoutUserInput | chat_participantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: chat_participantCreateManyUserInputEnvelope
    set?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    disconnect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    delete?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    update?: chat_participantUpdateWithWhereUniqueWithoutUserInput | chat_participantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: chat_participantUpdateManyWithWhereWithoutUserInput | chat_participantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: chat_participantScalarWhereInput | chat_participantScalarWhereInput[]
  }

  export type email_verificationUpdateOneWithoutUserNestedInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput
    upsert?: email_verificationUpsertWithoutUserInput
    disconnect?: email_verificationWhereInput | boolean
    delete?: email_verificationWhereInput | boolean
    connect?: email_verificationWhereUniqueInput
    update?: XOR<XOR<email_verificationUpdateToOneWithWhereWithoutUserInput, email_verificationUpdateWithoutUserInput>, email_verificationUncheckedUpdateWithoutUserInput>
  }

  export type invitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<invitationCreateWithoutInviterInput, invitationUncheckedCreateWithoutInviterInput> | invitationCreateWithoutInviterInput[] | invitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutInviterInput | invitationCreateOrConnectWithoutInviterInput[]
    upsert?: invitationUpsertWithWhereUniqueWithoutInviterInput | invitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: invitationCreateManyInviterInputEnvelope
    set?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    disconnect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    delete?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    update?: invitationUpdateWithWhereUniqueWithoutInviterInput | invitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: invitationUpdateManyWithWhereWithoutInviterInput | invitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: invitationScalarWhereInput | invitationScalarWhereInput[]
  }

  export type messageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutSenderInput | messageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutSenderInput | messageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messageUpdateManyWithWhereWithoutSenderInput | messageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type reset_passwordUpdateOneWithoutUserNestedInput = {
    create?: XOR<reset_passwordCreateWithoutUserInput, reset_passwordUncheckedCreateWithoutUserInput>
    connectOrCreate?: reset_passwordCreateOrConnectWithoutUserInput
    upsert?: reset_passwordUpsertWithoutUserInput
    disconnect?: reset_passwordWhereInput | boolean
    delete?: reset_passwordWhereInput | boolean
    connect?: reset_passwordWhereUniqueInput
    update?: XOR<XOR<reset_passwordUpdateToOneWithWhereWithoutUserInput, reset_passwordUpdateWithoutUserInput>, reset_passwordUncheckedUpdateWithoutUserInput>
  }

  export type chat_participantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<chat_participantCreateWithoutUserInput, chat_participantUncheckedCreateWithoutUserInput> | chat_participantCreateWithoutUserInput[] | chat_participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutUserInput | chat_participantCreateOrConnectWithoutUserInput[]
    upsert?: chat_participantUpsertWithWhereUniqueWithoutUserInput | chat_participantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: chat_participantCreateManyUserInputEnvelope
    set?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    disconnect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    delete?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    update?: chat_participantUpdateWithWhereUniqueWithoutUserInput | chat_participantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: chat_participantUpdateManyWithWhereWithoutUserInput | chat_participantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: chat_participantScalarWhereInput | chat_participantScalarWhereInput[]
  }

  export type email_verificationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput
    upsert?: email_verificationUpsertWithoutUserInput
    disconnect?: email_verificationWhereInput | boolean
    delete?: email_verificationWhereInput | boolean
    connect?: email_verificationWhereUniqueInput
    update?: XOR<XOR<email_verificationUpdateToOneWithWhereWithoutUserInput, email_verificationUpdateWithoutUserInput>, email_verificationUncheckedUpdateWithoutUserInput>
  }

  export type invitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<invitationCreateWithoutInviterInput, invitationUncheckedCreateWithoutInviterInput> | invitationCreateWithoutInviterInput[] | invitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutInviterInput | invitationCreateOrConnectWithoutInviterInput[]
    upsert?: invitationUpsertWithWhereUniqueWithoutInviterInput | invitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: invitationCreateManyInviterInputEnvelope
    set?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    disconnect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    delete?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    update?: invitationUpdateWithWhereUniqueWithoutInviterInput | invitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: invitationUpdateManyWithWhereWithoutInviterInput | invitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: invitationScalarWhereInput | invitationScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutSenderInput | messageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutSenderInput | messageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messageUpdateManyWithWhereWithoutSenderInput | messageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type reset_passwordUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<reset_passwordCreateWithoutUserInput, reset_passwordUncheckedCreateWithoutUserInput>
    connectOrCreate?: reset_passwordCreateOrConnectWithoutUserInput
    upsert?: reset_passwordUpsertWithoutUserInput
    disconnect?: reset_passwordWhereInput | boolean
    delete?: reset_passwordWhereInput | boolean
    connect?: reset_passwordWhereUniqueInput
    update?: XOR<XOR<reset_passwordUpdateToOneWithWhereWithoutUserInput, reset_passwordUpdateWithoutUserInput>, reset_passwordUncheckedUpdateWithoutUserInput>
  }

  export type userCreateNestedOneWithoutReset_passwordInput = {
    create?: XOR<userCreateWithoutReset_passwordInput, userUncheckedCreateWithoutReset_passwordInput>
    connectOrCreate?: userCreateOrConnectWithoutReset_passwordInput
    connect?: userWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutReset_passwordNestedInput = {
    create?: XOR<userCreateWithoutReset_passwordInput, userUncheckedCreateWithoutReset_passwordInput>
    connectOrCreate?: userCreateOrConnectWithoutReset_passwordInput
    upsert?: userUpsertWithoutReset_passwordInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReset_passwordInput, userUpdateWithoutReset_passwordInput>, userUncheckedUpdateWithoutReset_passwordInput>
  }

  export type userCreateNestedOneWithoutEmail_verificationInput = {
    create?: XOR<userCreateWithoutEmail_verificationInput, userUncheckedCreateWithoutEmail_verificationInput>
    connectOrCreate?: userCreateOrConnectWithoutEmail_verificationInput
    connect?: userWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutEmail_verificationNestedInput = {
    create?: XOR<userCreateWithoutEmail_verificationInput, userUncheckedCreateWithoutEmail_verificationInput>
    connectOrCreate?: userCreateOrConnectWithoutEmail_verificationInput
    upsert?: userUpsertWithoutEmail_verificationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutEmail_verificationInput, userUpdateWithoutEmail_verificationInput>, userUncheckedUpdateWithoutEmail_verificationInput>
  }

  export type chat_participantCreateNestedManyWithoutChatInput = {
    create?: XOR<chat_participantCreateWithoutChatInput, chat_participantUncheckedCreateWithoutChatInput> | chat_participantCreateWithoutChatInput[] | chat_participantUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutChatInput | chat_participantCreateOrConnectWithoutChatInput[]
    createMany?: chat_participantCreateManyChatInputEnvelope
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutChatInput = {
    create?: XOR<messageCreateWithoutChatInput, messageUncheckedCreateWithoutChatInput> | messageCreateWithoutChatInput[] | messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChatInput | messageCreateOrConnectWithoutChatInput[]
    createMany?: messageCreateManyChatInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type chat_participantUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<chat_participantCreateWithoutChatInput, chat_participantUncheckedCreateWithoutChatInput> | chat_participantCreateWithoutChatInput[] | chat_participantUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutChatInput | chat_participantCreateOrConnectWithoutChatInput[]
    createMany?: chat_participantCreateManyChatInputEnvelope
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<messageCreateWithoutChatInput, messageUncheckedCreateWithoutChatInput> | messageCreateWithoutChatInput[] | messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChatInput | messageCreateOrConnectWithoutChatInput[]
    createMany?: messageCreateManyChatInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type chat_participantUpdateManyWithoutChatNestedInput = {
    create?: XOR<chat_participantCreateWithoutChatInput, chat_participantUncheckedCreateWithoutChatInput> | chat_participantCreateWithoutChatInput[] | chat_participantUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutChatInput | chat_participantCreateOrConnectWithoutChatInput[]
    upsert?: chat_participantUpsertWithWhereUniqueWithoutChatInput | chat_participantUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: chat_participantCreateManyChatInputEnvelope
    set?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    disconnect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    delete?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    update?: chat_participantUpdateWithWhereUniqueWithoutChatInput | chat_participantUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: chat_participantUpdateManyWithWhereWithoutChatInput | chat_participantUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: chat_participantScalarWhereInput | chat_participantScalarWhereInput[]
  }

  export type messageUpdateManyWithoutChatNestedInput = {
    create?: XOR<messageCreateWithoutChatInput, messageUncheckedCreateWithoutChatInput> | messageCreateWithoutChatInput[] | messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChatInput | messageCreateOrConnectWithoutChatInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutChatInput | messageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: messageCreateManyChatInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutChatInput | messageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: messageUpdateManyWithWhereWithoutChatInput | messageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type chat_participantUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<chat_participantCreateWithoutChatInput, chat_participantUncheckedCreateWithoutChatInput> | chat_participantCreateWithoutChatInput[] | chat_participantUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_participantCreateOrConnectWithoutChatInput | chat_participantCreateOrConnectWithoutChatInput[]
    upsert?: chat_participantUpsertWithWhereUniqueWithoutChatInput | chat_participantUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: chat_participantCreateManyChatInputEnvelope
    set?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    disconnect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    delete?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    connect?: chat_participantWhereUniqueInput | chat_participantWhereUniqueInput[]
    update?: chat_participantUpdateWithWhereUniqueWithoutChatInput | chat_participantUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: chat_participantUpdateManyWithWhereWithoutChatInput | chat_participantUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: chat_participantScalarWhereInput | chat_participantScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<messageCreateWithoutChatInput, messageUncheckedCreateWithoutChatInput> | messageCreateWithoutChatInput[] | messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChatInput | messageCreateOrConnectWithoutChatInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutChatInput | messageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: messageCreateManyChatInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutChatInput | messageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: messageUpdateManyWithWhereWithoutChatInput | messageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type chatCreateNestedOneWithoutChat_participantInput = {
    create?: XOR<chatCreateWithoutChat_participantInput, chatUncheckedCreateWithoutChat_participantInput>
    connectOrCreate?: chatCreateOrConnectWithoutChat_participantInput
    connect?: chatWhereUniqueInput
  }

  export type userCreateNestedOneWithoutChat_parcitipantInput = {
    create?: XOR<userCreateWithoutChat_parcitipantInput, userUncheckedCreateWithoutChat_parcitipantInput>
    connectOrCreate?: userCreateOrConnectWithoutChat_parcitipantInput
    connect?: userWhereUniqueInput
  }

  export type chatUpdateOneRequiredWithoutChat_participantNestedInput = {
    create?: XOR<chatCreateWithoutChat_participantInput, chatUncheckedCreateWithoutChat_participantInput>
    connectOrCreate?: chatCreateOrConnectWithoutChat_participantInput
    upsert?: chatUpsertWithoutChat_participantInput
    connect?: chatWhereUniqueInput
    update?: XOR<XOR<chatUpdateToOneWithWhereWithoutChat_participantInput, chatUpdateWithoutChat_participantInput>, chatUncheckedUpdateWithoutChat_participantInput>
  }

  export type userUpdateOneRequiredWithoutChat_parcitipantNestedInput = {
    create?: XOR<userCreateWithoutChat_parcitipantInput, userUncheckedCreateWithoutChat_parcitipantInput>
    connectOrCreate?: userCreateOrConnectWithoutChat_parcitipantInput
    upsert?: userUpsertWithoutChat_parcitipantInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChat_parcitipantInput, userUpdateWithoutChat_parcitipantInput>, userUncheckedUpdateWithoutChat_parcitipantInput>
  }

  export type chatCreateNestedOneWithoutMessageInput = {
    create?: XOR<chatCreateWithoutMessageInput, chatUncheckedCreateWithoutMessageInput>
    connectOrCreate?: chatCreateOrConnectWithoutMessageInput
    connect?: chatWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMessageInput = {
    create?: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
    connectOrCreate?: userCreateOrConnectWithoutMessageInput
    connect?: userWhereUniqueInput
  }

  export type chatUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<chatCreateWithoutMessageInput, chatUncheckedCreateWithoutMessageInput>
    connectOrCreate?: chatCreateOrConnectWithoutMessageInput
    upsert?: chatUpsertWithoutMessageInput
    connect?: chatWhereUniqueInput
    update?: XOR<XOR<chatUpdateToOneWithWhereWithoutMessageInput, chatUpdateWithoutMessageInput>, chatUncheckedUpdateWithoutMessageInput>
  }

  export type userUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
    connectOrCreate?: userCreateOrConnectWithoutMessageInput
    upsert?: userUpsertWithoutMessageInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessageInput, userUpdateWithoutMessageInput>, userUncheckedUpdateWithoutMessageInput>
  }

  export type userCreateNestedOneWithoutInvitationInput = {
    create?: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: userCreateOrConnectWithoutInvitationInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: userCreateOrConnectWithoutInvitationInput
    upsert?: userUpsertWithoutInvitationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutInvitationInput, userUpdateWithoutInvitationInput>, userUncheckedUpdateWithoutInvitationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type chat_participantCreateWithoutUserInput = {
    id?: string
    chat: chatCreateNestedOneWithoutChat_participantInput
  }

  export type chat_participantUncheckedCreateWithoutUserInput = {
    id?: string
    chatId: string
  }

  export type chat_participantCreateOrConnectWithoutUserInput = {
    where: chat_participantWhereUniqueInput
    create: XOR<chat_participantCreateWithoutUserInput, chat_participantUncheckedCreateWithoutUserInput>
  }

  export type chat_participantCreateManyUserInputEnvelope = {
    data: chat_participantCreateManyUserInput | chat_participantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type email_verificationCreateWithoutUserInput = {
    id?: string
    code?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    expiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSentAt?: Date | string | null
    sendAttempts?: number
  }

  export type email_verificationUncheckedCreateWithoutUserInput = {
    id?: string
    code?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    expiresIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSentAt?: Date | string | null
    sendAttempts?: number
  }

  export type email_verificationCreateOrConnectWithoutUserInput = {
    where: email_verificationWhereUniqueInput
    create: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
  }

  export type invitationCreateWithoutInviterInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationUncheckedCreateWithoutInviterInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationCreateOrConnectWithoutInviterInput = {
    where: invitationWhereUniqueInput
    create: XOR<invitationCreateWithoutInviterInput, invitationUncheckedCreateWithoutInviterInput>
  }

  export type invitationCreateManyInviterInputEnvelope = {
    data: invitationCreateManyInviterInput | invitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutSenderInput = {
    id?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: chatCreateNestedOneWithoutMessageInput
  }

  export type messageUncheckedCreateWithoutSenderInput = {
    id?: string
    message?: string | null
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type messageCreateOrConnectWithoutSenderInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput>
  }

  export type messageCreateManySenderInputEnvelope = {
    data: messageCreateManySenderInput | messageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type reset_passwordCreateWithoutUserInput = {
    id?: string
    code?: string | null
    sendAttempts?: number
    lastSentAt?: Date | string | null
    resetedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresIn?: Date | string | null
  }

  export type reset_passwordUncheckedCreateWithoutUserInput = {
    id?: string
    code?: string | null
    sendAttempts?: number
    lastSentAt?: Date | string | null
    resetedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresIn?: Date | string | null
  }

  export type reset_passwordCreateOrConnectWithoutUserInput = {
    where: reset_passwordWhereUniqueInput
    create: XOR<reset_passwordCreateWithoutUserInput, reset_passwordUncheckedCreateWithoutUserInput>
  }

  export type chat_participantUpsertWithWhereUniqueWithoutUserInput = {
    where: chat_participantWhereUniqueInput
    update: XOR<chat_participantUpdateWithoutUserInput, chat_participantUncheckedUpdateWithoutUserInput>
    create: XOR<chat_participantCreateWithoutUserInput, chat_participantUncheckedCreateWithoutUserInput>
  }

  export type chat_participantUpdateWithWhereUniqueWithoutUserInput = {
    where: chat_participantWhereUniqueInput
    data: XOR<chat_participantUpdateWithoutUserInput, chat_participantUncheckedUpdateWithoutUserInput>
  }

  export type chat_participantUpdateManyWithWhereWithoutUserInput = {
    where: chat_participantScalarWhereInput
    data: XOR<chat_participantUpdateManyMutationInput, chat_participantUncheckedUpdateManyWithoutUserInput>
  }

  export type chat_participantScalarWhereInput = {
    AND?: chat_participantScalarWhereInput | chat_participantScalarWhereInput[]
    OR?: chat_participantScalarWhereInput[]
    NOT?: chat_participantScalarWhereInput | chat_participantScalarWhereInput[]
    id?: StringFilter<"chat_participant"> | string
    userId?: StringFilter<"chat_participant"> | string
    chatId?: StringFilter<"chat_participant"> | string
  }

  export type email_verificationUpsertWithoutUserInput = {
    update: XOR<email_verificationUpdateWithoutUserInput, email_verificationUncheckedUpdateWithoutUserInput>
    create: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
    where?: email_verificationWhereInput
  }

  export type email_verificationUpdateToOneWithWhereWithoutUserInput = {
    where?: email_verificationWhereInput
    data: XOR<email_verificationUpdateWithoutUserInput, email_verificationUncheckedUpdateWithoutUserInput>
  }

  export type email_verificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
  }

  export type email_verificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
  }

  export type invitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: invitationWhereUniqueInput
    update: XOR<invitationUpdateWithoutInviterInput, invitationUncheckedUpdateWithoutInviterInput>
    create: XOR<invitationCreateWithoutInviterInput, invitationUncheckedCreateWithoutInviterInput>
  }

  export type invitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: invitationWhereUniqueInput
    data: XOR<invitationUpdateWithoutInviterInput, invitationUncheckedUpdateWithoutInviterInput>
  }

  export type invitationUpdateManyWithWhereWithoutInviterInput = {
    where: invitationScalarWhereInput
    data: XOR<invitationUpdateManyMutationInput, invitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type invitationScalarWhereInput = {
    AND?: invitationScalarWhereInput | invitationScalarWhereInput[]
    OR?: invitationScalarWhereInput[]
    NOT?: invitationScalarWhereInput | invitationScalarWhereInput[]
    id?: StringFilter<"invitation"> | string
    email?: StringFilter<"invitation"> | string
    token?: StringFilter<"invitation"> | string
    inviterId?: StringFilter<"invitation"> | string
    createdAt?: DateTimeFilter<"invitation"> | Date | string
    updatedAt?: DateTimeFilter<"invitation"> | Date | string
  }

  export type messageUpsertWithWhereUniqueWithoutSenderInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutSenderInput, messageUncheckedUpdateWithoutSenderInput>
    create: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput>
  }

  export type messageUpdateWithWhereUniqueWithoutSenderInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutSenderInput, messageUncheckedUpdateWithoutSenderInput>
  }

  export type messageUpdateManyWithWhereWithoutSenderInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutSenderInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: StringFilter<"message"> | string
    message?: StringNullableFilter<"message"> | string | null
    senderId?: StringFilter<"message"> | string
    chatId?: StringFilter<"message"> | string
    createdAt?: DateTimeFilter<"message"> | Date | string
    updatedAt?: DateTimeFilter<"message"> | Date | string
  }

  export type reset_passwordUpsertWithoutUserInput = {
    update: XOR<reset_passwordUpdateWithoutUserInput, reset_passwordUncheckedUpdateWithoutUserInput>
    create: XOR<reset_passwordCreateWithoutUserInput, reset_passwordUncheckedCreateWithoutUserInput>
    where?: reset_passwordWhereInput
  }

  export type reset_passwordUpdateToOneWithWhereWithoutUserInput = {
    where?: reset_passwordWhereInput
    data: XOR<reset_passwordUpdateWithoutUserInput, reset_passwordUncheckedUpdateWithoutUserInput>
  }

  export type reset_passwordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reset_passwordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sendAttempts?: IntFieldUpdateOperationsInput | number
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateWithoutReset_passwordInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantCreateNestedManyWithoutUserInput
    email_verification?: email_verificationCreateNestedOneWithoutUserInput
    invitation?: invitationCreateNestedManyWithoutInviterInput
    message?: messageCreateNestedManyWithoutSenderInput
  }

  export type userUncheckedCreateWithoutReset_passwordInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantUncheckedCreateNestedManyWithoutUserInput
    email_verification?: email_verificationUncheckedCreateNestedOneWithoutUserInput
    invitation?: invitationUncheckedCreateNestedManyWithoutInviterInput
    message?: messageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type userCreateOrConnectWithoutReset_passwordInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReset_passwordInput, userUncheckedCreateWithoutReset_passwordInput>
  }

  export type userUpsertWithoutReset_passwordInput = {
    update: XOR<userUpdateWithoutReset_passwordInput, userUncheckedUpdateWithoutReset_passwordInput>
    create: XOR<userCreateWithoutReset_passwordInput, userUncheckedCreateWithoutReset_passwordInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReset_passwordInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReset_passwordInput, userUncheckedUpdateWithoutReset_passwordInput>
  }

  export type userUpdateWithoutReset_passwordInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUpdateOneWithoutUserNestedInput
    invitation?: invitationUpdateManyWithoutInviterNestedInput
    message?: messageUpdateManyWithoutSenderNestedInput
  }

  export type userUncheckedUpdateWithoutReset_passwordInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUncheckedUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUncheckedUpdateOneWithoutUserNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutInviterNestedInput
    message?: messageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type userCreateWithoutEmail_verificationInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantCreateNestedManyWithoutUserInput
    invitation?: invitationCreateNestedManyWithoutInviterInput
    message?: messageCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutEmail_verificationInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantUncheckedCreateNestedManyWithoutUserInput
    invitation?: invitationUncheckedCreateNestedManyWithoutInviterInput
    message?: messageUncheckedCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutEmail_verificationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEmail_verificationInput, userUncheckedCreateWithoutEmail_verificationInput>
  }

  export type userUpsertWithoutEmail_verificationInput = {
    update: XOR<userUpdateWithoutEmail_verificationInput, userUncheckedUpdateWithoutEmail_verificationInput>
    create: XOR<userCreateWithoutEmail_verificationInput, userUncheckedCreateWithoutEmail_verificationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutEmail_verificationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutEmail_verificationInput, userUncheckedUpdateWithoutEmail_verificationInput>
  }

  export type userUpdateWithoutEmail_verificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUpdateManyWithoutUserNestedInput
    invitation?: invitationUpdateManyWithoutInviterNestedInput
    message?: messageUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutEmail_verificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUncheckedUpdateManyWithoutUserNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutInviterNestedInput
    message?: messageUncheckedUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type chat_participantCreateWithoutChatInput = {
    id?: string
    user: userCreateNestedOneWithoutChat_parcitipantInput
  }

  export type chat_participantUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
  }

  export type chat_participantCreateOrConnectWithoutChatInput = {
    where: chat_participantWhereUniqueInput
    create: XOR<chat_participantCreateWithoutChatInput, chat_participantUncheckedCreateWithoutChatInput>
  }

  export type chat_participantCreateManyChatInputEnvelope = {
    data: chat_participantCreateManyChatInput | chat_participantCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutChatInput = {
    id?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: userCreateNestedOneWithoutMessageInput
  }

  export type messageUncheckedCreateWithoutChatInput = {
    id?: string
    message?: string | null
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type messageCreateOrConnectWithoutChatInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutChatInput, messageUncheckedCreateWithoutChatInput>
  }

  export type messageCreateManyChatInputEnvelope = {
    data: messageCreateManyChatInput | messageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type chat_participantUpsertWithWhereUniqueWithoutChatInput = {
    where: chat_participantWhereUniqueInput
    update: XOR<chat_participantUpdateWithoutChatInput, chat_participantUncheckedUpdateWithoutChatInput>
    create: XOR<chat_participantCreateWithoutChatInput, chat_participantUncheckedCreateWithoutChatInput>
  }

  export type chat_participantUpdateWithWhereUniqueWithoutChatInput = {
    where: chat_participantWhereUniqueInput
    data: XOR<chat_participantUpdateWithoutChatInput, chat_participantUncheckedUpdateWithoutChatInput>
  }

  export type chat_participantUpdateManyWithWhereWithoutChatInput = {
    where: chat_participantScalarWhereInput
    data: XOR<chat_participantUpdateManyMutationInput, chat_participantUncheckedUpdateManyWithoutChatInput>
  }

  export type messageUpsertWithWhereUniqueWithoutChatInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutChatInput, messageUncheckedUpdateWithoutChatInput>
    create: XOR<messageCreateWithoutChatInput, messageUncheckedCreateWithoutChatInput>
  }

  export type messageUpdateWithWhereUniqueWithoutChatInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutChatInput, messageUncheckedUpdateWithoutChatInput>
  }

  export type messageUpdateManyWithWhereWithoutChatInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutChatInput>
  }

  export type chatCreateWithoutChat_participantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: messageCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateWithoutChat_participantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: messageUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatCreateOrConnectWithoutChat_participantInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutChat_participantInput, chatUncheckedCreateWithoutChat_participantInput>
  }

  export type userCreateWithoutChat_parcitipantInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    email_verification?: email_verificationCreateNestedOneWithoutUserInput
    invitation?: invitationCreateNestedManyWithoutInviterInput
    message?: messageCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutChat_parcitipantInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    email_verification?: email_verificationUncheckedCreateNestedOneWithoutUserInput
    invitation?: invitationUncheckedCreateNestedManyWithoutInviterInput
    message?: messageUncheckedCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutChat_parcitipantInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChat_parcitipantInput, userUncheckedCreateWithoutChat_parcitipantInput>
  }

  export type chatUpsertWithoutChat_participantInput = {
    update: XOR<chatUpdateWithoutChat_participantInput, chatUncheckedUpdateWithoutChat_participantInput>
    create: XOR<chatCreateWithoutChat_participantInput, chatUncheckedCreateWithoutChat_participantInput>
    where?: chatWhereInput
  }

  export type chatUpdateToOneWithWhereWithoutChat_participantInput = {
    where?: chatWhereInput
    data: XOR<chatUpdateWithoutChat_participantInput, chatUncheckedUpdateWithoutChat_participantInput>
  }

  export type chatUpdateWithoutChat_participantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: messageUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateWithoutChat_participantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: messageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type userUpsertWithoutChat_parcitipantInput = {
    update: XOR<userUpdateWithoutChat_parcitipantInput, userUncheckedUpdateWithoutChat_parcitipantInput>
    create: XOR<userCreateWithoutChat_parcitipantInput, userUncheckedCreateWithoutChat_parcitipantInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChat_parcitipantInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChat_parcitipantInput, userUncheckedUpdateWithoutChat_parcitipantInput>
  }

  export type userUpdateWithoutChat_parcitipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification?: email_verificationUpdateOneWithoutUserNestedInput
    invitation?: invitationUpdateManyWithoutInviterNestedInput
    message?: messageUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutChat_parcitipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification?: email_verificationUncheckedUpdateOneWithoutUserNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutInviterNestedInput
    message?: messageUncheckedUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type chatCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_participant?: chat_participantCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_participant?: chat_participantUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatCreateOrConnectWithoutMessageInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutMessageInput, chatUncheckedCreateWithoutMessageInput>
  }

  export type userCreateWithoutMessageInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantCreateNestedManyWithoutUserInput
    email_verification?: email_verificationCreateNestedOneWithoutUserInput
    invitation?: invitationCreateNestedManyWithoutInviterInput
    reset_password?: reset_passwordCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutMessageInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantUncheckedCreateNestedManyWithoutUserInput
    email_verification?: email_verificationUncheckedCreateNestedOneWithoutUserInput
    invitation?: invitationUncheckedCreateNestedManyWithoutInviterInput
    reset_password?: reset_passwordUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutMessageInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
  }

  export type chatUpsertWithoutMessageInput = {
    update: XOR<chatUpdateWithoutMessageInput, chatUncheckedUpdateWithoutMessageInput>
    create: XOR<chatCreateWithoutMessageInput, chatUncheckedCreateWithoutMessageInput>
    where?: chatWhereInput
  }

  export type chatUpdateToOneWithWhereWithoutMessageInput = {
    where?: chatWhereInput
    data: XOR<chatUpdateWithoutMessageInput, chatUncheckedUpdateWithoutMessageInput>
  }

  export type chatUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_participant?: chat_participantUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_participant?: chat_participantUncheckedUpdateManyWithoutChatNestedInput
  }

  export type userUpsertWithoutMessageInput = {
    update: XOR<userUpdateWithoutMessageInput, userUncheckedUpdateWithoutMessageInput>
    create: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessageInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessageInput, userUncheckedUpdateWithoutMessageInput>
  }

  export type userUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUpdateOneWithoutUserNestedInput
    invitation?: invitationUpdateManyWithoutInviterNestedInput
    reset_password?: reset_passwordUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUncheckedUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUncheckedUpdateOneWithoutUserNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutInviterNestedInput
    reset_password?: reset_passwordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutInvitationInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantCreateNestedManyWithoutUserInput
    email_verification?: email_verificationCreateNestedOneWithoutUserInput
    message?: messageCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutInvitationInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat_parcitipant?: chat_participantUncheckedCreateNestedManyWithoutUserInput
    email_verification?: email_verificationUncheckedCreateNestedOneWithoutUserInput
    message?: messageUncheckedCreateNestedManyWithoutSenderInput
    reset_password?: reset_passwordUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutInvitationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
  }

  export type userUpsertWithoutInvitationInput = {
    update: XOR<userUpdateWithoutInvitationInput, userUncheckedUpdateWithoutInvitationInput>
    create: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutInvitationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutInvitationInput, userUncheckedUpdateWithoutInvitationInput>
  }

  export type userUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUpdateOneWithoutUserNestedInput
    message?: messageUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_parcitipant?: chat_participantUncheckedUpdateManyWithoutUserNestedInput
    email_verification?: email_verificationUncheckedUpdateOneWithoutUserNestedInput
    message?: messageUncheckedUpdateManyWithoutSenderNestedInput
    reset_password?: reset_passwordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type chat_participantCreateManyUserInput = {
    id?: string
    chatId: string
  }

  export type invitationCreateManyInviterInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type messageCreateManySenderInput = {
    id?: string
    message?: string | null
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chat_participantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chat?: chatUpdateOneRequiredWithoutChat_participantNestedInput
  }

  export type chat_participantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_participantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type invitationUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: chatUpdateOneRequiredWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_participantCreateManyChatInput = {
    id?: string
    userId: string
  }

  export type messageCreateManyChatInput = {
    id?: string
    message?: string | null
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chat_participantUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutChat_parcitipantNestedInput
  }

  export type chat_participantUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_participantUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type messageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: userUpdateOneRequiredWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}