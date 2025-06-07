
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
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model discounts
 * 
 */
export type discounts = $Result.DefaultSelection<Prisma.$discountsPayload>
/**
 * Model gifts
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type gifts = $Result.DefaultSelection<Prisma.$giftsPayload>
/**
 * Model logistics_providers
 * 
 */
export type logistics_providers = $Result.DefaultSelection<Prisma.$logistics_providersPayload>
/**
 * Model merchants
 * 
 */
export type merchants = $Result.DefaultSelection<Prisma.$merchantsPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model payments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model reviews
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model shipments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type shipments = $Result.DefaultSelection<Prisma.$shipmentsPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
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
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discounts`: Exposes CRUD operations for the **discounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discounts.findMany()
    * ```
    */
  get discounts(): Prisma.discountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gifts`: Exposes CRUD operations for the **gifts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gifts
    * const gifts = await prisma.gifts.findMany()
    * ```
    */
  get gifts(): Prisma.giftsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logistics_providers`: Exposes CRUD operations for the **logistics_providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logistics_providers
    * const logistics_providers = await prisma.logistics_providers.findMany()
    * ```
    */
  get logistics_providers(): Prisma.logistics_providersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merchants`: Exposes CRUD operations for the **merchants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchants.findMany()
    * ```
    */
  get merchants(): Prisma.merchantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipments`: Exposes CRUD operations for the **shipments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipments.findMany()
    * ```
    */
  get shipments(): Prisma.shipmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    categories: 'categories',
    discounts: 'discounts',
    gifts: 'gifts',
    logistics_providers: 'logistics_providers',
    merchants: 'merchants',
    order_items: 'order_items',
    orders: 'orders',
    payments: 'payments',
    products: 'products',
    reviews: 'reviews',
    shipments: 'shipments',
    users: 'users'
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
      modelProps: "categories" | "discounts" | "gifts" | "logistics_providers" | "merchants" | "order_items" | "orders" | "payments" | "products" | "reviews" | "shipments" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      discounts: {
        payload: Prisma.$discountsPayload<ExtArgs>
        fields: Prisma.discountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          findFirst: {
            args: Prisma.discountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          findMany: {
            args: Prisma.discountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>[]
          }
          create: {
            args: Prisma.discountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          createMany: {
            args: Prisma.discountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.discountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>[]
          }
          delete: {
            args: Prisma.discountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          update: {
            args: Prisma.discountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          deleteMany: {
            args: Prisma.discountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.discountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.discountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>[]
          }
          upsert: {
            args: Prisma.discountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          aggregate: {
            args: Prisma.DiscountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscounts>
          }
          groupBy: {
            args: Prisma.discountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.discountsCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountsCountAggregateOutputType> | number
          }
        }
      }
      gifts: {
        payload: Prisma.$giftsPayload<ExtArgs>
        fields: Prisma.giftsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.giftsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.giftsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>
          }
          findFirst: {
            args: Prisma.giftsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.giftsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>
          }
          findMany: {
            args: Prisma.giftsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>[]
          }
          create: {
            args: Prisma.giftsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>
          }
          createMany: {
            args: Prisma.giftsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.giftsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>[]
          }
          delete: {
            args: Prisma.giftsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>
          }
          update: {
            args: Prisma.giftsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>
          }
          deleteMany: {
            args: Prisma.giftsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.giftsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.giftsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>[]
          }
          upsert: {
            args: Prisma.giftsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giftsPayload>
          }
          aggregate: {
            args: Prisma.GiftsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGifts>
          }
          groupBy: {
            args: Prisma.giftsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftsGroupByOutputType>[]
          }
          count: {
            args: Prisma.giftsCountArgs<ExtArgs>
            result: $Utils.Optional<GiftsCountAggregateOutputType> | number
          }
        }
      }
      logistics_providers: {
        payload: Prisma.$logistics_providersPayload<ExtArgs>
        fields: Prisma.logistics_providersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logistics_providersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logistics_providersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>
          }
          findFirst: {
            args: Prisma.logistics_providersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logistics_providersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>
          }
          findMany: {
            args: Prisma.logistics_providersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>[]
          }
          create: {
            args: Prisma.logistics_providersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>
          }
          createMany: {
            args: Prisma.logistics_providersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logistics_providersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>[]
          }
          delete: {
            args: Prisma.logistics_providersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>
          }
          update: {
            args: Prisma.logistics_providersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>
          }
          deleteMany: {
            args: Prisma.logistics_providersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logistics_providersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logistics_providersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>[]
          }
          upsert: {
            args: Prisma.logistics_providersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logistics_providersPayload>
          }
          aggregate: {
            args: Prisma.Logistics_providersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogistics_providers>
          }
          groupBy: {
            args: Prisma.logistics_providersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Logistics_providersGroupByOutputType>[]
          }
          count: {
            args: Prisma.logistics_providersCountArgs<ExtArgs>
            result: $Utils.Optional<Logistics_providersCountAggregateOutputType> | number
          }
        }
      }
      merchants: {
        payload: Prisma.$merchantsPayload<ExtArgs>
        fields: Prisma.merchantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.merchantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.merchantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          findFirst: {
            args: Prisma.merchantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.merchantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          findMany: {
            args: Prisma.merchantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>[]
          }
          create: {
            args: Prisma.merchantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          createMany: {
            args: Prisma.merchantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.merchantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>[]
          }
          delete: {
            args: Prisma.merchantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          update: {
            args: Prisma.merchantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          deleteMany: {
            args: Prisma.merchantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.merchantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.merchantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>[]
          }
          upsert: {
            args: Prisma.merchantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          aggregate: {
            args: Prisma.MerchantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchants>
          }
          groupBy: {
            args: Prisma.merchantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.merchantsCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantsCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      shipments: {
        payload: Prisma.$shipmentsPayload<ExtArgs>
        fields: Prisma.shipmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shipmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shipmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>
          }
          findFirst: {
            args: Prisma.shipmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shipmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>
          }
          findMany: {
            args: Prisma.shipmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>[]
          }
          create: {
            args: Prisma.shipmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>
          }
          createMany: {
            args: Prisma.shipmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shipmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>[]
          }
          delete: {
            args: Prisma.shipmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>
          }
          update: {
            args: Prisma.shipmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>
          }
          deleteMany: {
            args: Prisma.shipmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shipmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shipmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>[]
          }
          upsert: {
            args: Prisma.shipmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shipmentsPayload>
          }
          aggregate: {
            args: Prisma.ShipmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipments>
          }
          groupBy: {
            args: Prisma.shipmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.shipmentsCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    categories?: categoriesOmit
    discounts?: discountsOmit
    gifts?: giftsOmit
    logistics_providers?: logistics_providersOmit
    merchants?: merchantsOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    payments?: paymentsOmit
    products?: productsOmit
    reviews?: reviewsOmit
    shipments?: shipmentsOmit
    users?: usersOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    other_categories: number
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_categories?: boolean | CategoriesCountOutputTypeCountOther_categoriesArgs
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountOther_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type Logistics_providersCountOutputType
   */

  export type Logistics_providersCountOutputType = {
    shipments: number
  }

  export type Logistics_providersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | Logistics_providersCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * Logistics_providersCountOutputType without action
   */
  export type Logistics_providersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logistics_providersCountOutputType
     */
    select?: Logistics_providersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Logistics_providersCountOutputType without action
   */
  export type Logistics_providersCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shipmentsWhereInput
  }


  /**
   * Count Type MerchantsCountOutputType
   */

  export type MerchantsCountOutputType = {
    orders: number
    products: number
  }

  export type MerchantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | MerchantsCountOutputTypeCountOrdersArgs
    products?: boolean | MerchantsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * MerchantsCountOutputType without action
   */
  export type MerchantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantsCountOutputType
     */
    select?: MerchantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantsCountOutputType without action
   */
  export type MerchantsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * MerchantsCountOutputType without action
   */
  export type MerchantsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    gifts: number
    order_items: number
    payments: number
    shipments: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts?: boolean | OrdersCountOutputTypeCountGiftsArgs
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
    payments?: boolean | OrdersCountOutputTypeCountPaymentsArgs
    shipments?: boolean | OrdersCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: giftsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shipmentsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    discounts: number
    order_items: number
    reviews: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | ProductsCountOutputTypeCountDiscountsArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
    reviews?: boolean | ProductsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discountsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    gifts_gifts_gift_receiver_idTousers: number
    gifts_gifts_gift_sender_idTousers: number
    orders: number
    reviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts_gifts_gift_receiver_idTousers?: boolean | UsersCountOutputTypeCountGifts_gifts_gift_receiver_idTousersArgs
    gifts_gifts_gift_sender_idTousers?: boolean | UsersCountOutputTypeCountGifts_gifts_gift_sender_idTousersArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGifts_gifts_gift_receiver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: giftsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGifts_gifts_gift_sender_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: giftsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
    parent_category_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: bigint | null
    parent_category_id: bigint | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: bigint | null
    name: string | null
    description: string | null
    parent_category_id: bigint | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: bigint | null
    name: string | null
    description: string | null
    parent_category_id: bigint | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    name: number
    description: number
    parent_category_id: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
    parent_category_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
    parent_category_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_category_id?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_category_id?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_category_id?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: bigint
    name: string
    description: string | null
    parent_category_id: bigint | null
    created_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_category_id?: boolean
    created_at?: boolean
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_category_id?: boolean
    created_at?: boolean
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_category_id?: boolean
    created_at?: boolean
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_category_id?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "description" | "parent_category_id" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      other_categories: Prisma.$categoriesPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: bigint
      name: string
      description: string | null
      parent_category_id: bigint | null
      created_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categories$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_categories<T extends categories$other_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$other_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'BigInt'>
    readonly name: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly parent_category_id: FieldRef<"categories", 'BigInt'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.categories
   */
  export type categories$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * categories.other_categories
   */
  export type categories$other_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model discounts
   */

  export type AggregateDiscounts = {
    _count: DiscountsCountAggregateOutputType | null
    _avg: DiscountsAvgAggregateOutputType | null
    _sum: DiscountsSumAggregateOutputType | null
    _min: DiscountsMinAggregateOutputType | null
    _max: DiscountsMaxAggregateOutputType | null
  }

  export type DiscountsAvgAggregateOutputType = {
    discount_id: number | null
    product_id: number | null
    discount_percentage: Decimal | null
  }

  export type DiscountsSumAggregateOutputType = {
    discount_id: bigint | null
    product_id: bigint | null
    discount_percentage: Decimal | null
  }

  export type DiscountsMinAggregateOutputType = {
    discount_id: bigint | null
    product_id: bigint | null
    discount_percentage: Decimal | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type DiscountsMaxAggregateOutputType = {
    discount_id: bigint | null
    product_id: bigint | null
    discount_percentage: Decimal | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type DiscountsCountAggregateOutputType = {
    discount_id: number
    product_id: number
    discount_percentage: number
    start_date: number
    end_date: number
    created_at: number
    _all: number
  }


  export type DiscountsAvgAggregateInputType = {
    discount_id?: true
    product_id?: true
    discount_percentage?: true
  }

  export type DiscountsSumAggregateInputType = {
    discount_id?: true
    product_id?: true
    discount_percentage?: true
  }

  export type DiscountsMinAggregateInputType = {
    discount_id?: true
    product_id?: true
    discount_percentage?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type DiscountsMaxAggregateInputType = {
    discount_id?: true
    product_id?: true
    discount_percentage?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type DiscountsCountAggregateInputType = {
    discount_id?: true
    product_id?: true
    discount_percentage?: true
    start_date?: true
    end_date?: true
    created_at?: true
    _all?: true
  }

  export type DiscountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discounts to aggregate.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discounts
    **/
    _count?: true | DiscountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountsMaxAggregateInputType
  }

  export type GetDiscountsAggregateType<T extends DiscountsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscounts[P]>
      : GetScalarType<T[P], AggregateDiscounts[P]>
  }




  export type discountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discountsWhereInput
    orderBy?: discountsOrderByWithAggregationInput | discountsOrderByWithAggregationInput[]
    by: DiscountsScalarFieldEnum[] | DiscountsScalarFieldEnum
    having?: discountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountsCountAggregateInputType | true
    _avg?: DiscountsAvgAggregateInputType
    _sum?: DiscountsSumAggregateInputType
    _min?: DiscountsMinAggregateInputType
    _max?: DiscountsMaxAggregateInputType
  }

  export type DiscountsGroupByOutputType = {
    discount_id: bigint
    product_id: bigint
    discount_percentage: Decimal
    start_date: Date
    end_date: Date
    created_at: Date | null
    _count: DiscountsCountAggregateOutputType | null
    _avg: DiscountsAvgAggregateOutputType | null
    _sum: DiscountsSumAggregateOutputType | null
    _min: DiscountsMinAggregateOutputType | null
    _max: DiscountsMaxAggregateOutputType | null
  }

  type GetDiscountsGroupByPayload<T extends discountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountsGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountsGroupByOutputType[P]>
        }
      >
    >


  export type discountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discount_id?: boolean
    product_id?: boolean
    discount_percentage?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discounts"]>

  export type discountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discount_id?: boolean
    product_id?: boolean
    discount_percentage?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discounts"]>

  export type discountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discount_id?: boolean
    product_id?: boolean
    discount_percentage?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discounts"]>

  export type discountsSelectScalar = {
    discount_id?: boolean
    product_id?: boolean
    discount_percentage?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
  }

  export type discountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"discount_id" | "product_id" | "discount_percentage" | "start_date" | "end_date" | "created_at", ExtArgs["result"]["discounts"]>
  export type discountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type discountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type discountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $discountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discounts"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      discount_id: bigint
      product_id: bigint
      discount_percentage: Prisma.Decimal
      start_date: Date
      end_date: Date
      created_at: Date | null
    }, ExtArgs["result"]["discounts"]>
    composites: {}
  }

  type discountsGetPayload<S extends boolean | null | undefined | discountsDefaultArgs> = $Result.GetResult<Prisma.$discountsPayload, S>

  type discountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<discountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountsCountAggregateInputType | true
    }

  export interface discountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discounts'], meta: { name: 'discounts' } }
    /**
     * Find zero or one Discounts that matches the filter.
     * @param {discountsFindUniqueArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends discountsFindUniqueArgs>(args: SelectSubset<T, discountsFindUniqueArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {discountsFindUniqueOrThrowArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends discountsFindUniqueOrThrowArgs>(args: SelectSubset<T, discountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsFindFirstArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends discountsFindFirstArgs>(args?: SelectSubset<T, discountsFindFirstArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsFindFirstOrThrowArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends discountsFindFirstOrThrowArgs>(args?: SelectSubset<T, discountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discounts.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discounts.findMany({ take: 10 })
     * 
     * // Only select the `discount_id`
     * const discountsWithDiscount_idOnly = await prisma.discounts.findMany({ select: { discount_id: true } })
     * 
     */
    findMany<T extends discountsFindManyArgs>(args?: SelectSubset<T, discountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discounts.
     * @param {discountsCreateArgs} args - Arguments to create a Discounts.
     * @example
     * // Create one Discounts
     * const Discounts = await prisma.discounts.create({
     *   data: {
     *     // ... data to create a Discounts
     *   }
     * })
     * 
     */
    create<T extends discountsCreateArgs>(args: SelectSubset<T, discountsCreateArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {discountsCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discounts = await prisma.discounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends discountsCreateManyArgs>(args?: SelectSubset<T, discountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {discountsCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discounts = await prisma.discounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discounts and only return the `discount_id`
     * const discountsWithDiscount_idOnly = await prisma.discounts.createManyAndReturn({
     *   select: { discount_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends discountsCreateManyAndReturnArgs>(args?: SelectSubset<T, discountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discounts.
     * @param {discountsDeleteArgs} args - Arguments to delete one Discounts.
     * @example
     * // Delete one Discounts
     * const Discounts = await prisma.discounts.delete({
     *   where: {
     *     // ... filter to delete one Discounts
     *   }
     * })
     * 
     */
    delete<T extends discountsDeleteArgs>(args: SelectSubset<T, discountsDeleteArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discounts.
     * @param {discountsUpdateArgs} args - Arguments to update one Discounts.
     * @example
     * // Update one Discounts
     * const discounts = await prisma.discounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends discountsUpdateArgs>(args: SelectSubset<T, discountsUpdateArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {discountsDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends discountsDeleteManyArgs>(args?: SelectSubset<T, discountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discounts = await prisma.discounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends discountsUpdateManyArgs>(args: SelectSubset<T, discountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts and returns the data updated in the database.
     * @param {discountsUpdateManyAndReturnArgs} args - Arguments to update many Discounts.
     * @example
     * // Update many Discounts
     * const discounts = await prisma.discounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discounts and only return the `discount_id`
     * const discountsWithDiscount_idOnly = await prisma.discounts.updateManyAndReturn({
     *   select: { discount_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends discountsUpdateManyAndReturnArgs>(args: SelectSubset<T, discountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discounts.
     * @param {discountsUpsertArgs} args - Arguments to update or create a Discounts.
     * @example
     * // Update or create a Discounts
     * const discounts = await prisma.discounts.upsert({
     *   create: {
     *     // ... data to create a Discounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discounts we want to update
     *   }
     * })
     */
    upsert<T extends discountsUpsertArgs>(args: SelectSubset<T, discountsUpsertArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discounts.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends discountsCountArgs>(
      args?: Subset<T, discountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountsAggregateArgs>(args: Subset<T, DiscountsAggregateArgs>): Prisma.PrismaPromise<GetDiscountsAggregateType<T>>

    /**
     * Group by Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsGroupByArgs} args - Group by arguments.
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
      T extends discountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discountsGroupByArgs['orderBy'] }
        : { orderBy?: discountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, discountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discounts model
   */
  readonly fields: discountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the discounts model
   */
  interface discountsFieldRefs {
    readonly discount_id: FieldRef<"discounts", 'BigInt'>
    readonly product_id: FieldRef<"discounts", 'BigInt'>
    readonly discount_percentage: FieldRef<"discounts", 'Decimal'>
    readonly start_date: FieldRef<"discounts", 'DateTime'>
    readonly end_date: FieldRef<"discounts", 'DateTime'>
    readonly created_at: FieldRef<"discounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * discounts findUnique
   */
  export type discountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts findUniqueOrThrow
   */
  export type discountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts findFirst
   */
  export type discountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discounts.
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discounts.
     */
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * discounts findFirstOrThrow
   */
  export type discountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discounts.
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discounts.
     */
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * discounts findMany
   */
  export type discountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discounts.
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * discounts create
   */
  export type discountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * The data needed to create a discounts.
     */
    data: XOR<discountsCreateInput, discountsUncheckedCreateInput>
  }

  /**
   * discounts createMany
   */
  export type discountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discounts.
     */
    data: discountsCreateManyInput | discountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * discounts createManyAndReturn
   */
  export type discountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * The data used to create many discounts.
     */
    data: discountsCreateManyInput | discountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * discounts update
   */
  export type discountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * The data needed to update a discounts.
     */
    data: XOR<discountsUpdateInput, discountsUncheckedUpdateInput>
    /**
     * Choose, which discounts to update.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts updateMany
   */
  export type discountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discounts.
     */
    data: XOR<discountsUpdateManyMutationInput, discountsUncheckedUpdateManyInput>
    /**
     * Filter which discounts to update
     */
    where?: discountsWhereInput
    /**
     * Limit how many discounts to update.
     */
    limit?: number
  }

  /**
   * discounts updateManyAndReturn
   */
  export type discountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * The data used to update discounts.
     */
    data: XOR<discountsUpdateManyMutationInput, discountsUncheckedUpdateManyInput>
    /**
     * Filter which discounts to update
     */
    where?: discountsWhereInput
    /**
     * Limit how many discounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * discounts upsert
   */
  export type discountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * The filter to search for the discounts to update in case it exists.
     */
    where: discountsWhereUniqueInput
    /**
     * In case the discounts found by the `where` argument doesn't exist, create a new discounts with this data.
     */
    create: XOR<discountsCreateInput, discountsUncheckedCreateInput>
    /**
     * In case the discounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discountsUpdateInput, discountsUncheckedUpdateInput>
  }

  /**
   * discounts delete
   */
  export type discountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter which discounts to delete.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts deleteMany
   */
  export type discountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discounts to delete
     */
    where?: discountsWhereInput
    /**
     * Limit how many discounts to delete.
     */
    limit?: number
  }

  /**
   * discounts without action
   */
  export type discountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
  }


  /**
   * Model gifts
   */

  export type AggregateGifts = {
    _count: GiftsCountAggregateOutputType | null
    _avg: GiftsAvgAggregateOutputType | null
    _sum: GiftsSumAggregateOutputType | null
    _min: GiftsMinAggregateOutputType | null
    _max: GiftsMaxAggregateOutputType | null
  }

  export type GiftsAvgAggregateOutputType = {
    gift_id: number | null
    gift_sender_id: number | null
    gift_receiver_id: number | null
    order_id: number | null
  }

  export type GiftsSumAggregateOutputType = {
    gift_id: bigint | null
    gift_sender_id: bigint | null
    gift_receiver_id: bigint | null
    order_id: bigint | null
  }

  export type GiftsMinAggregateOutputType = {
    gift_id: bigint | null
    gift_sender_id: bigint | null
    gift_receiver_id: bigint | null
    receiver_phone: string | null
    receiver_email: string | null
    receiver_address: string | null
    message: string | null
    order_id: bigint | null
    created_at: Date | null
  }

  export type GiftsMaxAggregateOutputType = {
    gift_id: bigint | null
    gift_sender_id: bigint | null
    gift_receiver_id: bigint | null
    receiver_phone: string | null
    receiver_email: string | null
    receiver_address: string | null
    message: string | null
    order_id: bigint | null
    created_at: Date | null
  }

  export type GiftsCountAggregateOutputType = {
    gift_id: number
    gift_sender_id: number
    gift_receiver_id: number
    receiver_phone: number
    receiver_email: number
    receiver_address: number
    message: number
    order_id: number
    created_at: number
    _all: number
  }


  export type GiftsAvgAggregateInputType = {
    gift_id?: true
    gift_sender_id?: true
    gift_receiver_id?: true
    order_id?: true
  }

  export type GiftsSumAggregateInputType = {
    gift_id?: true
    gift_sender_id?: true
    gift_receiver_id?: true
    order_id?: true
  }

  export type GiftsMinAggregateInputType = {
    gift_id?: true
    gift_sender_id?: true
    gift_receiver_id?: true
    receiver_phone?: true
    receiver_email?: true
    receiver_address?: true
    message?: true
    order_id?: true
    created_at?: true
  }

  export type GiftsMaxAggregateInputType = {
    gift_id?: true
    gift_sender_id?: true
    gift_receiver_id?: true
    receiver_phone?: true
    receiver_email?: true
    receiver_address?: true
    message?: true
    order_id?: true
    created_at?: true
  }

  export type GiftsCountAggregateInputType = {
    gift_id?: true
    gift_sender_id?: true
    gift_receiver_id?: true
    receiver_phone?: true
    receiver_email?: true
    receiver_address?: true
    message?: true
    order_id?: true
    created_at?: true
    _all?: true
  }

  export type GiftsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gifts to aggregate.
     */
    where?: giftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gifts to fetch.
     */
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: giftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gifts
    **/
    _count?: true | GiftsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftsMaxAggregateInputType
  }

  export type GetGiftsAggregateType<T extends GiftsAggregateArgs> = {
        [P in keyof T & keyof AggregateGifts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGifts[P]>
      : GetScalarType<T[P], AggregateGifts[P]>
  }




  export type giftsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: giftsWhereInput
    orderBy?: giftsOrderByWithAggregationInput | giftsOrderByWithAggregationInput[]
    by: GiftsScalarFieldEnum[] | GiftsScalarFieldEnum
    having?: giftsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftsCountAggregateInputType | true
    _avg?: GiftsAvgAggregateInputType
    _sum?: GiftsSumAggregateInputType
    _min?: GiftsMinAggregateInputType
    _max?: GiftsMaxAggregateInputType
  }

  export type GiftsGroupByOutputType = {
    gift_id: bigint
    gift_sender_id: bigint
    gift_receiver_id: bigint | null
    receiver_phone: string | null
    receiver_email: string | null
    receiver_address: string
    message: string | null
    order_id: bigint
    created_at: Date | null
    _count: GiftsCountAggregateOutputType | null
    _avg: GiftsAvgAggregateOutputType | null
    _sum: GiftsSumAggregateOutputType | null
    _min: GiftsMinAggregateOutputType | null
    _max: GiftsMaxAggregateOutputType | null
  }

  type GetGiftsGroupByPayload<T extends giftsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftsGroupByOutputType[P]>
            : GetScalarType<T[P], GiftsGroupByOutputType[P]>
        }
      >
    >


  export type giftsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gift_id?: boolean
    gift_sender_id?: boolean
    gift_receiver_id?: boolean
    receiver_phone?: boolean
    receiver_email?: boolean
    receiver_address?: boolean
    message?: boolean
    order_id?: boolean
    created_at?: boolean
    users_gifts_gift_receiver_idTousers?: boolean | gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>
    users_gifts_gift_sender_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gifts"]>

  export type giftsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gift_id?: boolean
    gift_sender_id?: boolean
    gift_receiver_id?: boolean
    receiver_phone?: boolean
    receiver_email?: boolean
    receiver_address?: boolean
    message?: boolean
    order_id?: boolean
    created_at?: boolean
    users_gifts_gift_receiver_idTousers?: boolean | gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>
    users_gifts_gift_sender_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gifts"]>

  export type giftsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gift_id?: boolean
    gift_sender_id?: boolean
    gift_receiver_id?: boolean
    receiver_phone?: boolean
    receiver_email?: boolean
    receiver_address?: boolean
    message?: boolean
    order_id?: boolean
    created_at?: boolean
    users_gifts_gift_receiver_idTousers?: boolean | gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>
    users_gifts_gift_sender_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gifts"]>

  export type giftsSelectScalar = {
    gift_id?: boolean
    gift_sender_id?: boolean
    gift_receiver_id?: boolean
    receiver_phone?: boolean
    receiver_email?: boolean
    receiver_address?: boolean
    message?: boolean
    order_id?: boolean
    created_at?: boolean
  }

  export type giftsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gift_id" | "gift_sender_id" | "gift_receiver_id" | "receiver_phone" | "receiver_email" | "receiver_address" | "message" | "order_id" | "created_at", ExtArgs["result"]["gifts"]>
  export type giftsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_gifts_gift_receiver_idTousers?: boolean | gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>
    users_gifts_gift_sender_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type giftsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_gifts_gift_receiver_idTousers?: boolean | gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>
    users_gifts_gift_sender_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type giftsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_gifts_gift_receiver_idTousers?: boolean | gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>
    users_gifts_gift_sender_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $giftsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gifts"
    objects: {
      users_gifts_gift_receiver_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_gifts_gift_sender_idTousers: Prisma.$usersPayload<ExtArgs>
      orders: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gift_id: bigint
      gift_sender_id: bigint
      gift_receiver_id: bigint | null
      receiver_phone: string | null
      receiver_email: string | null
      receiver_address: string
      message: string | null
      order_id: bigint
      created_at: Date | null
    }, ExtArgs["result"]["gifts"]>
    composites: {}
  }

  type giftsGetPayload<S extends boolean | null | undefined | giftsDefaultArgs> = $Result.GetResult<Prisma.$giftsPayload, S>

  type giftsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<giftsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftsCountAggregateInputType | true
    }

  export interface giftsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gifts'], meta: { name: 'gifts' } }
    /**
     * Find zero or one Gifts that matches the filter.
     * @param {giftsFindUniqueArgs} args - Arguments to find a Gifts
     * @example
     * // Get one Gifts
     * const gifts = await prisma.gifts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends giftsFindUniqueArgs>(args: SelectSubset<T, giftsFindUniqueArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gifts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {giftsFindUniqueOrThrowArgs} args - Arguments to find a Gifts
     * @example
     * // Get one Gifts
     * const gifts = await prisma.gifts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends giftsFindUniqueOrThrowArgs>(args: SelectSubset<T, giftsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giftsFindFirstArgs} args - Arguments to find a Gifts
     * @example
     * // Get one Gifts
     * const gifts = await prisma.gifts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends giftsFindFirstArgs>(args?: SelectSubset<T, giftsFindFirstArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gifts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giftsFindFirstOrThrowArgs} args - Arguments to find a Gifts
     * @example
     * // Get one Gifts
     * const gifts = await prisma.gifts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends giftsFindFirstOrThrowArgs>(args?: SelectSubset<T, giftsFindFirstOrThrowArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giftsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gifts
     * const gifts = await prisma.gifts.findMany()
     * 
     * // Get first 10 Gifts
     * const gifts = await prisma.gifts.findMany({ take: 10 })
     * 
     * // Only select the `gift_id`
     * const giftsWithGift_idOnly = await prisma.gifts.findMany({ select: { gift_id: true } })
     * 
     */
    findMany<T extends giftsFindManyArgs>(args?: SelectSubset<T, giftsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gifts.
     * @param {giftsCreateArgs} args - Arguments to create a Gifts.
     * @example
     * // Create one Gifts
     * const Gifts = await prisma.gifts.create({
     *   data: {
     *     // ... data to create a Gifts
     *   }
     * })
     * 
     */
    create<T extends giftsCreateArgs>(args: SelectSubset<T, giftsCreateArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gifts.
     * @param {giftsCreateManyArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gifts = await prisma.gifts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends giftsCreateManyArgs>(args?: SelectSubset<T, giftsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gifts and returns the data saved in the database.
     * @param {giftsCreateManyAndReturnArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gifts = await prisma.gifts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gifts and only return the `gift_id`
     * const giftsWithGift_idOnly = await prisma.gifts.createManyAndReturn({
     *   select: { gift_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends giftsCreateManyAndReturnArgs>(args?: SelectSubset<T, giftsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gifts.
     * @param {giftsDeleteArgs} args - Arguments to delete one Gifts.
     * @example
     * // Delete one Gifts
     * const Gifts = await prisma.gifts.delete({
     *   where: {
     *     // ... filter to delete one Gifts
     *   }
     * })
     * 
     */
    delete<T extends giftsDeleteArgs>(args: SelectSubset<T, giftsDeleteArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gifts.
     * @param {giftsUpdateArgs} args - Arguments to update one Gifts.
     * @example
     * // Update one Gifts
     * const gifts = await prisma.gifts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends giftsUpdateArgs>(args: SelectSubset<T, giftsUpdateArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gifts.
     * @param {giftsDeleteManyArgs} args - Arguments to filter Gifts to delete.
     * @example
     * // Delete a few Gifts
     * const { count } = await prisma.gifts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends giftsDeleteManyArgs>(args?: SelectSubset<T, giftsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giftsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gifts
     * const gifts = await prisma.gifts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends giftsUpdateManyArgs>(args: SelectSubset<T, giftsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts and returns the data updated in the database.
     * @param {giftsUpdateManyAndReturnArgs} args - Arguments to update many Gifts.
     * @example
     * // Update many Gifts
     * const gifts = await prisma.gifts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gifts and only return the `gift_id`
     * const giftsWithGift_idOnly = await prisma.gifts.updateManyAndReturn({
     *   select: { gift_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends giftsUpdateManyAndReturnArgs>(args: SelectSubset<T, giftsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gifts.
     * @param {giftsUpsertArgs} args - Arguments to update or create a Gifts.
     * @example
     * // Update or create a Gifts
     * const gifts = await prisma.gifts.upsert({
     *   create: {
     *     // ... data to create a Gifts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gifts we want to update
     *   }
     * })
     */
    upsert<T extends giftsUpsertArgs>(args: SelectSubset<T, giftsUpsertArgs<ExtArgs>>): Prisma__giftsClient<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giftsCountArgs} args - Arguments to filter Gifts to count.
     * @example
     * // Count the number of Gifts
     * const count = await prisma.gifts.count({
     *   where: {
     *     // ... the filter for the Gifts we want to count
     *   }
     * })
    **/
    count<T extends giftsCountArgs>(
      args?: Subset<T, giftsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiftsAggregateArgs>(args: Subset<T, GiftsAggregateArgs>): Prisma.PrismaPromise<GetGiftsAggregateType<T>>

    /**
     * Group by Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giftsGroupByArgs} args - Group by arguments.
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
      T extends giftsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: giftsGroupByArgs['orderBy'] }
        : { orderBy?: giftsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, giftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gifts model
   */
  readonly fields: giftsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gifts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__giftsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_gifts_gift_receiver_idTousers<T extends gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_gifts_gift_sender_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the gifts model
   */
  interface giftsFieldRefs {
    readonly gift_id: FieldRef<"gifts", 'BigInt'>
    readonly gift_sender_id: FieldRef<"gifts", 'BigInt'>
    readonly gift_receiver_id: FieldRef<"gifts", 'BigInt'>
    readonly receiver_phone: FieldRef<"gifts", 'String'>
    readonly receiver_email: FieldRef<"gifts", 'String'>
    readonly receiver_address: FieldRef<"gifts", 'String'>
    readonly message: FieldRef<"gifts", 'String'>
    readonly order_id: FieldRef<"gifts", 'BigInt'>
    readonly created_at: FieldRef<"gifts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gifts findUnique
   */
  export type giftsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * Filter, which gifts to fetch.
     */
    where: giftsWhereUniqueInput
  }

  /**
   * gifts findUniqueOrThrow
   */
  export type giftsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * Filter, which gifts to fetch.
     */
    where: giftsWhereUniqueInput
  }

  /**
   * gifts findFirst
   */
  export type giftsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * Filter, which gifts to fetch.
     */
    where?: giftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gifts to fetch.
     */
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gifts.
     */
    cursor?: giftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gifts.
     */
    distinct?: GiftsScalarFieldEnum | GiftsScalarFieldEnum[]
  }

  /**
   * gifts findFirstOrThrow
   */
  export type giftsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * Filter, which gifts to fetch.
     */
    where?: giftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gifts to fetch.
     */
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gifts.
     */
    cursor?: giftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gifts.
     */
    distinct?: GiftsScalarFieldEnum | GiftsScalarFieldEnum[]
  }

  /**
   * gifts findMany
   */
  export type giftsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * Filter, which gifts to fetch.
     */
    where?: giftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gifts to fetch.
     */
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gifts.
     */
    cursor?: giftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gifts.
     */
    skip?: number
    distinct?: GiftsScalarFieldEnum | GiftsScalarFieldEnum[]
  }

  /**
   * gifts create
   */
  export type giftsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * The data needed to create a gifts.
     */
    data: XOR<giftsCreateInput, giftsUncheckedCreateInput>
  }

  /**
   * gifts createMany
   */
  export type giftsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gifts.
     */
    data: giftsCreateManyInput | giftsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gifts createManyAndReturn
   */
  export type giftsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * The data used to create many gifts.
     */
    data: giftsCreateManyInput | giftsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gifts update
   */
  export type giftsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * The data needed to update a gifts.
     */
    data: XOR<giftsUpdateInput, giftsUncheckedUpdateInput>
    /**
     * Choose, which gifts to update.
     */
    where: giftsWhereUniqueInput
  }

  /**
   * gifts updateMany
   */
  export type giftsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gifts.
     */
    data: XOR<giftsUpdateManyMutationInput, giftsUncheckedUpdateManyInput>
    /**
     * Filter which gifts to update
     */
    where?: giftsWhereInput
    /**
     * Limit how many gifts to update.
     */
    limit?: number
  }

  /**
   * gifts updateManyAndReturn
   */
  export type giftsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * The data used to update gifts.
     */
    data: XOR<giftsUpdateManyMutationInput, giftsUncheckedUpdateManyInput>
    /**
     * Filter which gifts to update
     */
    where?: giftsWhereInput
    /**
     * Limit how many gifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * gifts upsert
   */
  export type giftsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * The filter to search for the gifts to update in case it exists.
     */
    where: giftsWhereUniqueInput
    /**
     * In case the gifts found by the `where` argument doesn't exist, create a new gifts with this data.
     */
    create: XOR<giftsCreateInput, giftsUncheckedCreateInput>
    /**
     * In case the gifts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<giftsUpdateInput, giftsUncheckedUpdateInput>
  }

  /**
   * gifts delete
   */
  export type giftsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    /**
     * Filter which gifts to delete.
     */
    where: giftsWhereUniqueInput
  }

  /**
   * gifts deleteMany
   */
  export type giftsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gifts to delete
     */
    where?: giftsWhereInput
    /**
     * Limit how many gifts to delete.
     */
    limit?: number
  }

  /**
   * gifts.users_gifts_gift_receiver_idTousers
   */
  export type gifts$users_gifts_gift_receiver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * gifts without action
   */
  export type giftsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
  }


  /**
   * Model logistics_providers
   */

  export type AggregateLogistics_providers = {
    _count: Logistics_providersCountAggregateOutputType | null
    _avg: Logistics_providersAvgAggregateOutputType | null
    _sum: Logistics_providersSumAggregateOutputType | null
    _min: Logistics_providersMinAggregateOutputType | null
    _max: Logistics_providersMaxAggregateOutputType | null
  }

  export type Logistics_providersAvgAggregateOutputType = {
    provider_id: number | null
  }

  export type Logistics_providersSumAggregateOutputType = {
    provider_id: bigint | null
  }

  export type Logistics_providersMinAggregateOutputType = {
    provider_id: bigint | null
    name: string | null
    contact_phone: string | null
    contact_email: string | null
    created_at: Date | null
  }

  export type Logistics_providersMaxAggregateOutputType = {
    provider_id: bigint | null
    name: string | null
    contact_phone: string | null
    contact_email: string | null
    created_at: Date | null
  }

  export type Logistics_providersCountAggregateOutputType = {
    provider_id: number
    name: number
    contact_phone: number
    contact_email: number
    created_at: number
    _all: number
  }


  export type Logistics_providersAvgAggregateInputType = {
    provider_id?: true
  }

  export type Logistics_providersSumAggregateInputType = {
    provider_id?: true
  }

  export type Logistics_providersMinAggregateInputType = {
    provider_id?: true
    name?: true
    contact_phone?: true
    contact_email?: true
    created_at?: true
  }

  export type Logistics_providersMaxAggregateInputType = {
    provider_id?: true
    name?: true
    contact_phone?: true
    contact_email?: true
    created_at?: true
  }

  export type Logistics_providersCountAggregateInputType = {
    provider_id?: true
    name?: true
    contact_phone?: true
    contact_email?: true
    created_at?: true
    _all?: true
  }

  export type Logistics_providersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logistics_providers to aggregate.
     */
    where?: logistics_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logistics_providers to fetch.
     */
    orderBy?: logistics_providersOrderByWithRelationInput | logistics_providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logistics_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logistics_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logistics_providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logistics_providers
    **/
    _count?: true | Logistics_providersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Logistics_providersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Logistics_providersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Logistics_providersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Logistics_providersMaxAggregateInputType
  }

  export type GetLogistics_providersAggregateType<T extends Logistics_providersAggregateArgs> = {
        [P in keyof T & keyof AggregateLogistics_providers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogistics_providers[P]>
      : GetScalarType<T[P], AggregateLogistics_providers[P]>
  }




  export type logistics_providersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logistics_providersWhereInput
    orderBy?: logistics_providersOrderByWithAggregationInput | logistics_providersOrderByWithAggregationInput[]
    by: Logistics_providersScalarFieldEnum[] | Logistics_providersScalarFieldEnum
    having?: logistics_providersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Logistics_providersCountAggregateInputType | true
    _avg?: Logistics_providersAvgAggregateInputType
    _sum?: Logistics_providersSumAggregateInputType
    _min?: Logistics_providersMinAggregateInputType
    _max?: Logistics_providersMaxAggregateInputType
  }

  export type Logistics_providersGroupByOutputType = {
    provider_id: bigint
    name: string
    contact_phone: string
    contact_email: string | null
    created_at: Date | null
    _count: Logistics_providersCountAggregateOutputType | null
    _avg: Logistics_providersAvgAggregateOutputType | null
    _sum: Logistics_providersSumAggregateOutputType | null
    _min: Logistics_providersMinAggregateOutputType | null
    _max: Logistics_providersMaxAggregateOutputType | null
  }

  type GetLogistics_providersGroupByPayload<T extends logistics_providersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Logistics_providersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Logistics_providersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Logistics_providersGroupByOutputType[P]>
            : GetScalarType<T[P], Logistics_providersGroupByOutputType[P]>
        }
      >
    >


  export type logistics_providersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    created_at?: boolean
    shipments?: boolean | logistics_providers$shipmentsArgs<ExtArgs>
    _count?: boolean | Logistics_providersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logistics_providers"]>

  export type logistics_providersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["logistics_providers"]>

  export type logistics_providersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["logistics_providers"]>

  export type logistics_providersSelectScalar = {
    provider_id?: boolean
    name?: boolean
    contact_phone?: boolean
    contact_email?: boolean
    created_at?: boolean
  }

  export type logistics_providersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"provider_id" | "name" | "contact_phone" | "contact_email" | "created_at", ExtArgs["result"]["logistics_providers"]>
  export type logistics_providersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | logistics_providers$shipmentsArgs<ExtArgs>
    _count?: boolean | Logistics_providersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type logistics_providersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type logistics_providersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $logistics_providersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logistics_providers"
    objects: {
      shipments: Prisma.$shipmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      provider_id: bigint
      name: string
      contact_phone: string
      contact_email: string | null
      created_at: Date | null
    }, ExtArgs["result"]["logistics_providers"]>
    composites: {}
  }

  type logistics_providersGetPayload<S extends boolean | null | undefined | logistics_providersDefaultArgs> = $Result.GetResult<Prisma.$logistics_providersPayload, S>

  type logistics_providersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logistics_providersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Logistics_providersCountAggregateInputType | true
    }

  export interface logistics_providersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logistics_providers'], meta: { name: 'logistics_providers' } }
    /**
     * Find zero or one Logistics_providers that matches the filter.
     * @param {logistics_providersFindUniqueArgs} args - Arguments to find a Logistics_providers
     * @example
     * // Get one Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logistics_providersFindUniqueArgs>(args: SelectSubset<T, logistics_providersFindUniqueArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logistics_providers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logistics_providersFindUniqueOrThrowArgs} args - Arguments to find a Logistics_providers
     * @example
     * // Get one Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logistics_providersFindUniqueOrThrowArgs>(args: SelectSubset<T, logistics_providersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logistics_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logistics_providersFindFirstArgs} args - Arguments to find a Logistics_providers
     * @example
     * // Get one Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logistics_providersFindFirstArgs>(args?: SelectSubset<T, logistics_providersFindFirstArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logistics_providers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logistics_providersFindFirstOrThrowArgs} args - Arguments to find a Logistics_providers
     * @example
     * // Get one Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logistics_providersFindFirstOrThrowArgs>(args?: SelectSubset<T, logistics_providersFindFirstOrThrowArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logistics_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logistics_providersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.findMany()
     * 
     * // Get first 10 Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.findMany({ take: 10 })
     * 
     * // Only select the `provider_id`
     * const logistics_providersWithProvider_idOnly = await prisma.logistics_providers.findMany({ select: { provider_id: true } })
     * 
     */
    findMany<T extends logistics_providersFindManyArgs>(args?: SelectSubset<T, logistics_providersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logistics_providers.
     * @param {logistics_providersCreateArgs} args - Arguments to create a Logistics_providers.
     * @example
     * // Create one Logistics_providers
     * const Logistics_providers = await prisma.logistics_providers.create({
     *   data: {
     *     // ... data to create a Logistics_providers
     *   }
     * })
     * 
     */
    create<T extends logistics_providersCreateArgs>(args: SelectSubset<T, logistics_providersCreateArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logistics_providers.
     * @param {logistics_providersCreateManyArgs} args - Arguments to create many Logistics_providers.
     * @example
     * // Create many Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logistics_providersCreateManyArgs>(args?: SelectSubset<T, logistics_providersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logistics_providers and returns the data saved in the database.
     * @param {logistics_providersCreateManyAndReturnArgs} args - Arguments to create many Logistics_providers.
     * @example
     * // Create many Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logistics_providers and only return the `provider_id`
     * const logistics_providersWithProvider_idOnly = await prisma.logistics_providers.createManyAndReturn({
     *   select: { provider_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logistics_providersCreateManyAndReturnArgs>(args?: SelectSubset<T, logistics_providersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logistics_providers.
     * @param {logistics_providersDeleteArgs} args - Arguments to delete one Logistics_providers.
     * @example
     * // Delete one Logistics_providers
     * const Logistics_providers = await prisma.logistics_providers.delete({
     *   where: {
     *     // ... filter to delete one Logistics_providers
     *   }
     * })
     * 
     */
    delete<T extends logistics_providersDeleteArgs>(args: SelectSubset<T, logistics_providersDeleteArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logistics_providers.
     * @param {logistics_providersUpdateArgs} args - Arguments to update one Logistics_providers.
     * @example
     * // Update one Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logistics_providersUpdateArgs>(args: SelectSubset<T, logistics_providersUpdateArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logistics_providers.
     * @param {logistics_providersDeleteManyArgs} args - Arguments to filter Logistics_providers to delete.
     * @example
     * // Delete a few Logistics_providers
     * const { count } = await prisma.logistics_providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logistics_providersDeleteManyArgs>(args?: SelectSubset<T, logistics_providersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logistics_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logistics_providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logistics_providersUpdateManyArgs>(args: SelectSubset<T, logistics_providersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logistics_providers and returns the data updated in the database.
     * @param {logistics_providersUpdateManyAndReturnArgs} args - Arguments to update many Logistics_providers.
     * @example
     * // Update many Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logistics_providers and only return the `provider_id`
     * const logistics_providersWithProvider_idOnly = await prisma.logistics_providers.updateManyAndReturn({
     *   select: { provider_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logistics_providersUpdateManyAndReturnArgs>(args: SelectSubset<T, logistics_providersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logistics_providers.
     * @param {logistics_providersUpsertArgs} args - Arguments to update or create a Logistics_providers.
     * @example
     * // Update or create a Logistics_providers
     * const logistics_providers = await prisma.logistics_providers.upsert({
     *   create: {
     *     // ... data to create a Logistics_providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logistics_providers we want to update
     *   }
     * })
     */
    upsert<T extends logistics_providersUpsertArgs>(args: SelectSubset<T, logistics_providersUpsertArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logistics_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logistics_providersCountArgs} args - Arguments to filter Logistics_providers to count.
     * @example
     * // Count the number of Logistics_providers
     * const count = await prisma.logistics_providers.count({
     *   where: {
     *     // ... the filter for the Logistics_providers we want to count
     *   }
     * })
    **/
    count<T extends logistics_providersCountArgs>(
      args?: Subset<T, logistics_providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Logistics_providersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logistics_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Logistics_providersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Logistics_providersAggregateArgs>(args: Subset<T, Logistics_providersAggregateArgs>): Prisma.PrismaPromise<GetLogistics_providersAggregateType<T>>

    /**
     * Group by Logistics_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logistics_providersGroupByArgs} args - Group by arguments.
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
      T extends logistics_providersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logistics_providersGroupByArgs['orderBy'] }
        : { orderBy?: logistics_providersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logistics_providersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogistics_providersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logistics_providers model
   */
  readonly fields: logistics_providersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logistics_providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logistics_providersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipments<T extends logistics_providers$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, logistics_providers$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the logistics_providers model
   */
  interface logistics_providersFieldRefs {
    readonly provider_id: FieldRef<"logistics_providers", 'BigInt'>
    readonly name: FieldRef<"logistics_providers", 'String'>
    readonly contact_phone: FieldRef<"logistics_providers", 'String'>
    readonly contact_email: FieldRef<"logistics_providers", 'String'>
    readonly created_at: FieldRef<"logistics_providers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logistics_providers findUnique
   */
  export type logistics_providersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * Filter, which logistics_providers to fetch.
     */
    where: logistics_providersWhereUniqueInput
  }

  /**
   * logistics_providers findUniqueOrThrow
   */
  export type logistics_providersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * Filter, which logistics_providers to fetch.
     */
    where: logistics_providersWhereUniqueInput
  }

  /**
   * logistics_providers findFirst
   */
  export type logistics_providersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * Filter, which logistics_providers to fetch.
     */
    where?: logistics_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logistics_providers to fetch.
     */
    orderBy?: logistics_providersOrderByWithRelationInput | logistics_providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logistics_providers.
     */
    cursor?: logistics_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logistics_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logistics_providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logistics_providers.
     */
    distinct?: Logistics_providersScalarFieldEnum | Logistics_providersScalarFieldEnum[]
  }

  /**
   * logistics_providers findFirstOrThrow
   */
  export type logistics_providersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * Filter, which logistics_providers to fetch.
     */
    where?: logistics_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logistics_providers to fetch.
     */
    orderBy?: logistics_providersOrderByWithRelationInput | logistics_providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logistics_providers.
     */
    cursor?: logistics_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logistics_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logistics_providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logistics_providers.
     */
    distinct?: Logistics_providersScalarFieldEnum | Logistics_providersScalarFieldEnum[]
  }

  /**
   * logistics_providers findMany
   */
  export type logistics_providersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * Filter, which logistics_providers to fetch.
     */
    where?: logistics_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logistics_providers to fetch.
     */
    orderBy?: logistics_providersOrderByWithRelationInput | logistics_providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logistics_providers.
     */
    cursor?: logistics_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logistics_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logistics_providers.
     */
    skip?: number
    distinct?: Logistics_providersScalarFieldEnum | Logistics_providersScalarFieldEnum[]
  }

  /**
   * logistics_providers create
   */
  export type logistics_providersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * The data needed to create a logistics_providers.
     */
    data: XOR<logistics_providersCreateInput, logistics_providersUncheckedCreateInput>
  }

  /**
   * logistics_providers createMany
   */
  export type logistics_providersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logistics_providers.
     */
    data: logistics_providersCreateManyInput | logistics_providersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logistics_providers createManyAndReturn
   */
  export type logistics_providersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * The data used to create many logistics_providers.
     */
    data: logistics_providersCreateManyInput | logistics_providersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logistics_providers update
   */
  export type logistics_providersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * The data needed to update a logistics_providers.
     */
    data: XOR<logistics_providersUpdateInput, logistics_providersUncheckedUpdateInput>
    /**
     * Choose, which logistics_providers to update.
     */
    where: logistics_providersWhereUniqueInput
  }

  /**
   * logistics_providers updateMany
   */
  export type logistics_providersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logistics_providers.
     */
    data: XOR<logistics_providersUpdateManyMutationInput, logistics_providersUncheckedUpdateManyInput>
    /**
     * Filter which logistics_providers to update
     */
    where?: logistics_providersWhereInput
    /**
     * Limit how many logistics_providers to update.
     */
    limit?: number
  }

  /**
   * logistics_providers updateManyAndReturn
   */
  export type logistics_providersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * The data used to update logistics_providers.
     */
    data: XOR<logistics_providersUpdateManyMutationInput, logistics_providersUncheckedUpdateManyInput>
    /**
     * Filter which logistics_providers to update
     */
    where?: logistics_providersWhereInput
    /**
     * Limit how many logistics_providers to update.
     */
    limit?: number
  }

  /**
   * logistics_providers upsert
   */
  export type logistics_providersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * The filter to search for the logistics_providers to update in case it exists.
     */
    where: logistics_providersWhereUniqueInput
    /**
     * In case the logistics_providers found by the `where` argument doesn't exist, create a new logistics_providers with this data.
     */
    create: XOR<logistics_providersCreateInput, logistics_providersUncheckedCreateInput>
    /**
     * In case the logistics_providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logistics_providersUpdateInput, logistics_providersUncheckedUpdateInput>
  }

  /**
   * logistics_providers delete
   */
  export type logistics_providersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
    /**
     * Filter which logistics_providers to delete.
     */
    where: logistics_providersWhereUniqueInput
  }

  /**
   * logistics_providers deleteMany
   */
  export type logistics_providersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logistics_providers to delete
     */
    where?: logistics_providersWhereInput
    /**
     * Limit how many logistics_providers to delete.
     */
    limit?: number
  }

  /**
   * logistics_providers.shipments
   */
  export type logistics_providers$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    where?: shipmentsWhereInput
    orderBy?: shipmentsOrderByWithRelationInput | shipmentsOrderByWithRelationInput[]
    cursor?: shipmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentsScalarFieldEnum | ShipmentsScalarFieldEnum[]
  }

  /**
   * logistics_providers without action
   */
  export type logistics_providersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logistics_providers
     */
    select?: logistics_providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logistics_providers
     */
    omit?: logistics_providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logistics_providersInclude<ExtArgs> | null
  }


  /**
   * Model merchants
   */

  export type AggregateMerchants = {
    _count: MerchantsCountAggregateOutputType | null
    _avg: MerchantsAvgAggregateOutputType | null
    _sum: MerchantsSumAggregateOutputType | null
    _min: MerchantsMinAggregateOutputType | null
    _max: MerchantsMaxAggregateOutputType | null
  }

  export type MerchantsAvgAggregateOutputType = {
    merchant_id: number | null
    user_id: number | null
  }

  export type MerchantsSumAggregateOutputType = {
    merchant_id: bigint | null
    user_id: bigint | null
  }

  export type MerchantsMinAggregateOutputType = {
    merchant_id: bigint | null
    user_id: bigint | null
    business_name: string | null
    business_license: string | null
    store_description: string | null
    is_verified: boolean | null
    created_at: Date | null
  }

  export type MerchantsMaxAggregateOutputType = {
    merchant_id: bigint | null
    user_id: bigint | null
    business_name: string | null
    business_license: string | null
    store_description: string | null
    is_verified: boolean | null
    created_at: Date | null
  }

  export type MerchantsCountAggregateOutputType = {
    merchant_id: number
    user_id: number
    business_name: number
    business_license: number
    store_description: number
    is_verified: number
    created_at: number
    _all: number
  }


  export type MerchantsAvgAggregateInputType = {
    merchant_id?: true
    user_id?: true
  }

  export type MerchantsSumAggregateInputType = {
    merchant_id?: true
    user_id?: true
  }

  export type MerchantsMinAggregateInputType = {
    merchant_id?: true
    user_id?: true
    business_name?: true
    business_license?: true
    store_description?: true
    is_verified?: true
    created_at?: true
  }

  export type MerchantsMaxAggregateInputType = {
    merchant_id?: true
    user_id?: true
    business_name?: true
    business_license?: true
    store_description?: true
    is_verified?: true
    created_at?: true
  }

  export type MerchantsCountAggregateInputType = {
    merchant_id?: true
    user_id?: true
    business_name?: true
    business_license?: true
    store_description?: true
    is_verified?: true
    created_at?: true
    _all?: true
  }

  export type MerchantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merchants to aggregate.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned merchants
    **/
    _count?: true | MerchantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantsMaxAggregateInputType
  }

  export type GetMerchantsAggregateType<T extends MerchantsAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchants[P]>
      : GetScalarType<T[P], AggregateMerchants[P]>
  }




  export type merchantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: merchantsWhereInput
    orderBy?: merchantsOrderByWithAggregationInput | merchantsOrderByWithAggregationInput[]
    by: MerchantsScalarFieldEnum[] | MerchantsScalarFieldEnum
    having?: merchantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantsCountAggregateInputType | true
    _avg?: MerchantsAvgAggregateInputType
    _sum?: MerchantsSumAggregateInputType
    _min?: MerchantsMinAggregateInputType
    _max?: MerchantsMaxAggregateInputType
  }

  export type MerchantsGroupByOutputType = {
    merchant_id: bigint
    user_id: bigint
    business_name: string
    business_license: string | null
    store_description: string | null
    is_verified: boolean | null
    created_at: Date | null
    _count: MerchantsCountAggregateOutputType | null
    _avg: MerchantsAvgAggregateOutputType | null
    _sum: MerchantsSumAggregateOutputType | null
    _min: MerchantsMinAggregateOutputType | null
    _max: MerchantsMaxAggregateOutputType | null
  }

  type GetMerchantsGroupByPayload<T extends merchantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantsGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantsGroupByOutputType[P]>
        }
      >
    >


  export type merchantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    merchant_id?: boolean
    user_id?: boolean
    business_name?: boolean
    business_license?: boolean
    store_description?: boolean
    is_verified?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | merchants$ordersArgs<ExtArgs>
    products?: boolean | merchants$productsArgs<ExtArgs>
    _count?: boolean | MerchantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchants"]>

  export type merchantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    merchant_id?: boolean
    user_id?: boolean
    business_name?: boolean
    business_license?: boolean
    store_description?: boolean
    is_verified?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchants"]>

  export type merchantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    merchant_id?: boolean
    user_id?: boolean
    business_name?: boolean
    business_license?: boolean
    store_description?: boolean
    is_verified?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchants"]>

  export type merchantsSelectScalar = {
    merchant_id?: boolean
    user_id?: boolean
    business_name?: boolean
    business_license?: boolean
    store_description?: boolean
    is_verified?: boolean
    created_at?: boolean
  }

  export type merchantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"merchant_id" | "user_id" | "business_name" | "business_license" | "store_description" | "is_verified" | "created_at", ExtArgs["result"]["merchants"]>
  export type merchantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    orders?: boolean | merchants$ordersArgs<ExtArgs>
    products?: boolean | merchants$productsArgs<ExtArgs>
    _count?: boolean | MerchantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type merchantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type merchantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $merchantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "merchants"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      orders: Prisma.$ordersPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      merchant_id: bigint
      user_id: bigint
      business_name: string
      business_license: string | null
      store_description: string | null
      is_verified: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["merchants"]>
    composites: {}
  }

  type merchantsGetPayload<S extends boolean | null | undefined | merchantsDefaultArgs> = $Result.GetResult<Prisma.$merchantsPayload, S>

  type merchantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<merchantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantsCountAggregateInputType | true
    }

  export interface merchantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['merchants'], meta: { name: 'merchants' } }
    /**
     * Find zero or one Merchants that matches the filter.
     * @param {merchantsFindUniqueArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends merchantsFindUniqueArgs>(args: SelectSubset<T, merchantsFindUniqueArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {merchantsFindUniqueOrThrowArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends merchantsFindUniqueOrThrowArgs>(args: SelectSubset<T, merchantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsFindFirstArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends merchantsFindFirstArgs>(args?: SelectSubset<T, merchantsFindFirstArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsFindFirstOrThrowArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends merchantsFindFirstOrThrowArgs>(args?: SelectSubset<T, merchantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchants.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchants.findMany({ take: 10 })
     * 
     * // Only select the `merchant_id`
     * const merchantsWithMerchant_idOnly = await prisma.merchants.findMany({ select: { merchant_id: true } })
     * 
     */
    findMany<T extends merchantsFindManyArgs>(args?: SelectSubset<T, merchantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchants.
     * @param {merchantsCreateArgs} args - Arguments to create a Merchants.
     * @example
     * // Create one Merchants
     * const Merchants = await prisma.merchants.create({
     *   data: {
     *     // ... data to create a Merchants
     *   }
     * })
     * 
     */
    create<T extends merchantsCreateArgs>(args: SelectSubset<T, merchantsCreateArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {merchantsCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchants = await prisma.merchants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends merchantsCreateManyArgs>(args?: SelectSubset<T, merchantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {merchantsCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchants = await prisma.merchants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `merchant_id`
     * const merchantsWithMerchant_idOnly = await prisma.merchants.createManyAndReturn({
     *   select: { merchant_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends merchantsCreateManyAndReturnArgs>(args?: SelectSubset<T, merchantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchants.
     * @param {merchantsDeleteArgs} args - Arguments to delete one Merchants.
     * @example
     * // Delete one Merchants
     * const Merchants = await prisma.merchants.delete({
     *   where: {
     *     // ... filter to delete one Merchants
     *   }
     * })
     * 
     */
    delete<T extends merchantsDeleteArgs>(args: SelectSubset<T, merchantsDeleteArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchants.
     * @param {merchantsUpdateArgs} args - Arguments to update one Merchants.
     * @example
     * // Update one Merchants
     * const merchants = await prisma.merchants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends merchantsUpdateArgs>(args: SelectSubset<T, merchantsUpdateArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {merchantsDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends merchantsDeleteManyArgs>(args?: SelectSubset<T, merchantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchants = await prisma.merchants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends merchantsUpdateManyArgs>(args: SelectSubset<T, merchantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {merchantsUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchants = await prisma.merchants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `merchant_id`
     * const merchantsWithMerchant_idOnly = await prisma.merchants.updateManyAndReturn({
     *   select: { merchant_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends merchantsUpdateManyAndReturnArgs>(args: SelectSubset<T, merchantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchants.
     * @param {merchantsUpsertArgs} args - Arguments to update or create a Merchants.
     * @example
     * // Update or create a Merchants
     * const merchants = await prisma.merchants.upsert({
     *   create: {
     *     // ... data to create a Merchants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchants we want to update
     *   }
     * })
     */
    upsert<T extends merchantsUpsertArgs>(args: SelectSubset<T, merchantsUpsertArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchants.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends merchantsCountArgs>(
      args?: Subset<T, merchantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantsAggregateArgs>(args: Subset<T, MerchantsAggregateArgs>): Prisma.PrismaPromise<GetMerchantsAggregateType<T>>

    /**
     * Group by Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsGroupByArgs} args - Group by arguments.
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
      T extends merchantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: merchantsGroupByArgs['orderBy'] }
        : { orderBy?: merchantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, merchantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the merchants model
   */
  readonly fields: merchantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for merchants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__merchantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends merchants$ordersArgs<ExtArgs> = {}>(args?: Subset<T, merchants$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends merchants$productsArgs<ExtArgs> = {}>(args?: Subset<T, merchants$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the merchants model
   */
  interface merchantsFieldRefs {
    readonly merchant_id: FieldRef<"merchants", 'BigInt'>
    readonly user_id: FieldRef<"merchants", 'BigInt'>
    readonly business_name: FieldRef<"merchants", 'String'>
    readonly business_license: FieldRef<"merchants", 'String'>
    readonly store_description: FieldRef<"merchants", 'String'>
    readonly is_verified: FieldRef<"merchants", 'Boolean'>
    readonly created_at: FieldRef<"merchants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * merchants findUnique
   */
  export type merchantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants findUniqueOrThrow
   */
  export type merchantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants findFirst
   */
  export type merchantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merchants.
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merchants.
     */
    distinct?: MerchantsScalarFieldEnum | MerchantsScalarFieldEnum[]
  }

  /**
   * merchants findFirstOrThrow
   */
  export type merchantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merchants.
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merchants.
     */
    distinct?: MerchantsScalarFieldEnum | MerchantsScalarFieldEnum[]
  }

  /**
   * merchants findMany
   */
  export type merchantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing merchants.
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    distinct?: MerchantsScalarFieldEnum | MerchantsScalarFieldEnum[]
  }

  /**
   * merchants create
   */
  export type merchantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * The data needed to create a merchants.
     */
    data: XOR<merchantsCreateInput, merchantsUncheckedCreateInput>
  }

  /**
   * merchants createMany
   */
  export type merchantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many merchants.
     */
    data: merchantsCreateManyInput | merchantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merchants createManyAndReturn
   */
  export type merchantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The data used to create many merchants.
     */
    data: merchantsCreateManyInput | merchantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * merchants update
   */
  export type merchantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * The data needed to update a merchants.
     */
    data: XOR<merchantsUpdateInput, merchantsUncheckedUpdateInput>
    /**
     * Choose, which merchants to update.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants updateMany
   */
  export type merchantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update merchants.
     */
    data: XOR<merchantsUpdateManyMutationInput, merchantsUncheckedUpdateManyInput>
    /**
     * Filter which merchants to update
     */
    where?: merchantsWhereInput
    /**
     * Limit how many merchants to update.
     */
    limit?: number
  }

  /**
   * merchants updateManyAndReturn
   */
  export type merchantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The data used to update merchants.
     */
    data: XOR<merchantsUpdateManyMutationInput, merchantsUncheckedUpdateManyInput>
    /**
     * Filter which merchants to update
     */
    where?: merchantsWhereInput
    /**
     * Limit how many merchants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * merchants upsert
   */
  export type merchantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * The filter to search for the merchants to update in case it exists.
     */
    where: merchantsWhereUniqueInput
    /**
     * In case the merchants found by the `where` argument doesn't exist, create a new merchants with this data.
     */
    create: XOR<merchantsCreateInput, merchantsUncheckedCreateInput>
    /**
     * In case the merchants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<merchantsUpdateInput, merchantsUncheckedUpdateInput>
  }

  /**
   * merchants delete
   */
  export type merchantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    /**
     * Filter which merchants to delete.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants deleteMany
   */
  export type merchantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merchants to delete
     */
    where?: merchantsWhereInput
    /**
     * Limit how many merchants to delete.
     */
    limit?: number
  }

  /**
   * merchants.orders
   */
  export type merchants$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * merchants.products
   */
  export type merchants$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * merchants without action
   */
  export type merchantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    order_item_id: bigint | null
    order_id: bigint | null
    product_id: bigint | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    order_item_id: bigint | null
    order_id: bigint | null
    product_id: bigint | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
    created_at: Date | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    order_item_id: bigint | null
    order_id: bigint | null
    product_id: bigint | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
    created_at: Date | null
  }

  export type Order_itemsCountAggregateOutputType = {
    order_item_id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: number
    subtotal: number
    created_at: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    order_item_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Order_itemsSumAggregateInputType = {
    order_item_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Order_itemsMinAggregateInputType = {
    order_item_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
    created_at?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    order_item_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
    created_at?: true
  }

  export type Order_itemsCountAggregateInputType = {
    order_item_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
    created_at?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    order_item_id: bigint
    order_id: bigint
    product_id: bigint
    quantity: number
    unit_price: Decimal
    subtotal: Decimal
    created_at: Date | null
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    order_item_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
    created_at?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_item_id" | "order_id" | "product_id" | "quantity" | "unit_price" | "subtotal" | "created_at", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_item_id: bigint
      order_id: bigint
      product_id: bigint
      quantity: number
      unit_price: Prisma.Decimal
      subtotal: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `order_item_id`
     * const order_itemsWithOrder_item_idOnly = await prisma.order_items.findMany({ select: { order_item_id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `order_item_id`
     * const order_itemsWithOrder_item_idOnly = await prisma.order_items.createManyAndReturn({
     *   select: { order_item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemsUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `order_item_id`
     * const order_itemsWithOrder_item_idOnly = await prisma.order_items.updateManyAndReturn({
     *   select: { order_item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly order_item_id: FieldRef<"order_items", 'BigInt'>
    readonly order_id: FieldRef<"order_items", 'BigInt'>
    readonly product_id: FieldRef<"order_items", 'BigInt'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly unit_price: FieldRef<"order_items", 'Decimal'>
    readonly subtotal: FieldRef<"order_items", 'Decimal'>
    readonly created_at: FieldRef<"order_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items updateManyAndReturn
   */
  export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    merchant_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: bigint | null
    customer_id: bigint | null
    merchant_id: bigint | null
    total_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: bigint | null
    customer_id: bigint | null
    merchant_id: bigint | null
    order_status: string | null
    total_amount: Decimal | null
    shipping_address: string | null
    delivery_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: bigint | null
    customer_id: bigint | null
    merchant_id: bigint | null
    order_status: string | null
    total_amount: Decimal | null
    shipping_address: string | null
    delivery_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    customer_id: number
    merchant_id: number
    order_status: number
    total_amount: number
    shipping_address: number
    delivery_type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    customer_id?: true
    merchant_id?: true
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    customer_id?: true
    merchant_id?: true
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    customer_id?: true
    merchant_id?: true
    order_status?: true
    total_amount?: true
    shipping_address?: true
    delivery_type?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    customer_id?: true
    merchant_id?: true
    order_status?: true
    total_amount?: true
    shipping_address?: true
    delivery_type?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    customer_id?: true
    merchant_id?: true
    order_status?: true
    total_amount?: true
    shipping_address?: true
    delivery_type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: bigint
    customer_id: bigint
    merchant_id: bigint
    order_status: string
    total_amount: Decimal
    shipping_address: string
    delivery_type: string
    created_at: Date | null
    updated_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    shipping_address?: boolean
    delivery_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    gifts?: boolean | orders$giftsArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
    payments?: boolean | orders$paymentsArgs<ExtArgs>
    shipments?: boolean | orders$shipmentsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    shipping_address?: boolean
    delivery_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    shipping_address?: boolean
    delivery_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    order_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    order_status?: boolean
    total_amount?: boolean
    shipping_address?: boolean
    delivery_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "customer_id" | "merchant_id" | "order_status" | "total_amount" | "shipping_address" | "delivery_type" | "created_at" | "updated_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts?: boolean | orders$giftsArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
    payments?: boolean | orders$paymentsArgs<ExtArgs>
    shipments?: boolean | orders$shipmentsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      gifts: Prisma.$giftsPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      merchants: Prisma.$merchantsPayload<ExtArgs>
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      shipments: Prisma.$shipmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: bigint
      customer_id: bigint
      merchant_id: bigint
      order_status: string
      total_amount: Prisma.Decimal
      shipping_address: string
      delivery_type: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.updateManyAndReturn({
     *   select: { order_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gifts<T extends orders$giftsArgs<ExtArgs> = {}>(args?: Subset<T, orders$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    merchants<T extends merchantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, merchantsDefaultArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends orders$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, orders$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipments<T extends orders$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, orders$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", 'BigInt'>
    readonly customer_id: FieldRef<"orders", 'BigInt'>
    readonly merchant_id: FieldRef<"orders", 'BigInt'>
    readonly order_status: FieldRef<"orders", 'String'>
    readonly total_amount: FieldRef<"orders", 'Decimal'>
    readonly shipping_address: FieldRef<"orders", 'String'>
    readonly delivery_type: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly updated_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.gifts
   */
  export type orders$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    where?: giftsWhereInput
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    cursor?: giftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftsScalarFieldEnum | GiftsScalarFieldEnum[]
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.payments
   */
  export type orders$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * orders.shipments
   */
  export type orders$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    where?: shipmentsWhereInput
    orderBy?: shipmentsOrderByWithRelationInput | shipmentsOrderByWithRelationInput[]
    cursor?: shipmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentsScalarFieldEnum | ShipmentsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    payment_id: bigint | null
    order_id: bigint | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    payment_id: bigint | null
    order_id: bigint | null
    transaction_id: string | null
    amount: Decimal | null
    payment_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    payment_id: bigint | null
    order_id: bigint | null
    transaction_id: string | null
    amount: Decimal | null
    payment_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    payment_id: number
    order_id: number
    transaction_id: number
    amount: number
    payment_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    payment_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    payment_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    payment_id?: true
    order_id?: true
    transaction_id?: true
    amount?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    payment_id?: true
    order_id?: true
    transaction_id?: true
    amount?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    payment_id?: true
    order_id?: true
    transaction_id?: true
    amount?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    payment_id: bigint
    order_id: bigint
    transaction_id: string
    amount: Decimal
    payment_status: string
    created_at: Date | null
    updated_at: Date | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    transaction_id?: boolean
    amount?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    transaction_id?: boolean
    amount?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    transaction_id?: boolean
    amount?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    payment_id?: boolean
    order_id?: boolean
    transaction_id?: boolean
    amount?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "order_id" | "transaction_id" | "amount" | "payment_status" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: bigint
      order_id: bigint
      transaction_id: string
      amount: Prisma.Decimal
      payment_status: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly payment_id: FieldRef<"payments", 'BigInt'>
    readonly order_id: FieldRef<"payments", 'BigInt'>
    readonly transaction_id: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly payment_status: FieldRef<"payments", 'String'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
    readonly updated_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
    merchant_id: number | null
    category_id: number | null
    price: Decimal | null
    stock_quantity: number | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: bigint | null
    merchant_id: bigint | null
    category_id: bigint | null
    price: Decimal | null
    stock_quantity: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: bigint | null
    merchant_id: bigint | null
    category_id: bigint | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock_quantity: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: bigint | null
    merchant_id: bigint | null
    category_id: bigint | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock_quantity: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    merchant_id: number
    category_id: number
    name: number
    description: number
    price: number
    stock_quantity: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
    merchant_id?: true
    category_id?: true
    price?: true
    stock_quantity?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
    merchant_id?: true
    category_id?: true
    price?: true
    stock_quantity?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    merchant_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    stock_quantity?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    merchant_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    stock_quantity?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    merchant_id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    stock_quantity?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: bigint
    merchant_id: bigint
    category_id: bigint
    name: string
    description: string | null
    price: Decimal
    stock_quantity: number
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    merchant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock_quantity?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    discounts?: boolean | products$discountsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
    reviews?: boolean | products$reviewsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    merchant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock_quantity?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    merchant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock_quantity?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    product_id?: boolean
    merchant_id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock_quantity?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "merchant_id" | "category_id" | "name" | "description" | "price" | "stock_quantity" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | products$discountsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
    reviews?: boolean | products$reviewsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    merchants?: boolean | merchantsDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      discounts: Prisma.$discountsPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>
      merchants: Prisma.$merchantsPayload<ExtArgs>
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: bigint
      merchant_id: bigint
      category_id: bigint
      name: string
      description: string | null
      price: Prisma.Decimal
      stock_quantity: number
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discounts<T extends products$discountsArgs<ExtArgs> = {}>(args?: Subset<T, products$discountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    merchants<T extends merchantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, merchantsDefaultArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends products$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, products$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", 'BigInt'>
    readonly merchant_id: FieldRef<"products", 'BigInt'>
    readonly category_id: FieldRef<"products", 'BigInt'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly stock_quantity: FieldRef<"products", 'Int'>
    readonly is_active: FieldRef<"products", 'Boolean'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.discounts
   */
  export type products$discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    where?: discountsWhereInput
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    cursor?: discountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products.reviews
   */
  export type products$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    review_id: number | null
    product_id: number | null
    customer_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    review_id: bigint | null
    product_id: bigint | null
    customer_id: bigint | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    review_id: bigint | null
    product_id: bigint | null
    customer_id: bigint | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    review_id: bigint | null
    product_id: bigint | null
    customer_id: bigint | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    review_id: number
    product_id: number
    customer_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    review_id?: true
    product_id?: true
    customer_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    review_id?: true
    product_id?: true
    customer_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    review_id?: true
    product_id?: true
    customer_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    review_id?: true
    product_id?: true
    customer_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    review_id?: true
    product_id?: true
    customer_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    review_id: bigint
    product_id: bigint
    customer_id: bigint
    rating: number
    comment: string | null
    created_at: Date | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    product_id?: boolean
    customer_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    product_id?: boolean
    customer_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    product_id?: boolean
    customer_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    review_id?: boolean
    product_id?: boolean
    customer_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "product_id" | "customer_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: bigint
      product_id: bigint
      customer_id: bigint
      rating: number
      comment: string | null
      created_at: Date | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
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
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly review_id: FieldRef<"reviews", 'BigInt'>
    readonly product_id: FieldRef<"reviews", 'BigInt'>
    readonly customer_id: FieldRef<"reviews", 'BigInt'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly comment: FieldRef<"reviews", 'String'>
    readonly created_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model shipments
   */

  export type AggregateShipments = {
    _count: ShipmentsCountAggregateOutputType | null
    _avg: ShipmentsAvgAggregateOutputType | null
    _sum: ShipmentsSumAggregateOutputType | null
    _min: ShipmentsMinAggregateOutputType | null
    _max: ShipmentsMaxAggregateOutputType | null
  }

  export type ShipmentsAvgAggregateOutputType = {
    shipment_id: number | null
    order_id: number | null
    provider_id: number | null
  }

  export type ShipmentsSumAggregateOutputType = {
    shipment_id: bigint | null
    order_id: bigint | null
    provider_id: bigint | null
  }

  export type ShipmentsMinAggregateOutputType = {
    shipment_id: bigint | null
    order_id: bigint | null
    provider_id: bigint | null
    tracking_number: string | null
    estimated_delivery_date: Date | null
    actual_delivery_date: Date | null
    shipment_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShipmentsMaxAggregateOutputType = {
    shipment_id: bigint | null
    order_id: bigint | null
    provider_id: bigint | null
    tracking_number: string | null
    estimated_delivery_date: Date | null
    actual_delivery_date: Date | null
    shipment_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShipmentsCountAggregateOutputType = {
    shipment_id: number
    order_id: number
    provider_id: number
    tracking_number: number
    estimated_delivery_date: number
    actual_delivery_date: number
    shipment_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ShipmentsAvgAggregateInputType = {
    shipment_id?: true
    order_id?: true
    provider_id?: true
  }

  export type ShipmentsSumAggregateInputType = {
    shipment_id?: true
    order_id?: true
    provider_id?: true
  }

  export type ShipmentsMinAggregateInputType = {
    shipment_id?: true
    order_id?: true
    provider_id?: true
    tracking_number?: true
    estimated_delivery_date?: true
    actual_delivery_date?: true
    shipment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type ShipmentsMaxAggregateInputType = {
    shipment_id?: true
    order_id?: true
    provider_id?: true
    tracking_number?: true
    estimated_delivery_date?: true
    actual_delivery_date?: true
    shipment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type ShipmentsCountAggregateInputType = {
    shipment_id?: true
    order_id?: true
    provider_id?: true
    tracking_number?: true
    estimated_delivery_date?: true
    actual_delivery_date?: true
    shipment_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ShipmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipments to aggregate.
     */
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     */
    orderBy?: shipmentsOrderByWithRelationInput | shipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shipments
    **/
    _count?: true | ShipmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentsMaxAggregateInputType
  }

  export type GetShipmentsAggregateType<T extends ShipmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateShipments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipments[P]>
      : GetScalarType<T[P], AggregateShipments[P]>
  }




  export type shipmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shipmentsWhereInput
    orderBy?: shipmentsOrderByWithAggregationInput | shipmentsOrderByWithAggregationInput[]
    by: ShipmentsScalarFieldEnum[] | ShipmentsScalarFieldEnum
    having?: shipmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentsCountAggregateInputType | true
    _avg?: ShipmentsAvgAggregateInputType
    _sum?: ShipmentsSumAggregateInputType
    _min?: ShipmentsMinAggregateInputType
    _max?: ShipmentsMaxAggregateInputType
  }

  export type ShipmentsGroupByOutputType = {
    shipment_id: bigint
    order_id: bigint
    provider_id: bigint
    tracking_number: string | null
    estimated_delivery_date: Date | null
    actual_delivery_date: Date | null
    shipment_status: string
    created_at: Date | null
    updated_at: Date | null
    _count: ShipmentsCountAggregateOutputType | null
    _avg: ShipmentsAvgAggregateOutputType | null
    _sum: ShipmentsSumAggregateOutputType | null
    _min: ShipmentsMinAggregateOutputType | null
    _max: ShipmentsMaxAggregateOutputType | null
  }

  type GetShipmentsGroupByPayload<T extends shipmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentsGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentsGroupByOutputType[P]>
        }
      >
    >


  export type shipmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shipment_id?: boolean
    order_id?: boolean
    provider_id?: boolean
    tracking_number?: boolean
    estimated_delivery_date?: boolean
    actual_delivery_date?: boolean
    shipment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    logistics_providers?: boolean | logistics_providersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipments"]>

  export type shipmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shipment_id?: boolean
    order_id?: boolean
    provider_id?: boolean
    tracking_number?: boolean
    estimated_delivery_date?: boolean
    actual_delivery_date?: boolean
    shipment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    logistics_providers?: boolean | logistics_providersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipments"]>

  export type shipmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shipment_id?: boolean
    order_id?: boolean
    provider_id?: boolean
    tracking_number?: boolean
    estimated_delivery_date?: boolean
    actual_delivery_date?: boolean
    shipment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    logistics_providers?: boolean | logistics_providersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipments"]>

  export type shipmentsSelectScalar = {
    shipment_id?: boolean
    order_id?: boolean
    provider_id?: boolean
    tracking_number?: boolean
    estimated_delivery_date?: boolean
    actual_delivery_date?: boolean
    shipment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type shipmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shipment_id" | "order_id" | "provider_id" | "tracking_number" | "estimated_delivery_date" | "actual_delivery_date" | "shipment_status" | "created_at" | "updated_at", ExtArgs["result"]["shipments"]>
  export type shipmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    logistics_providers?: boolean | logistics_providersDefaultArgs<ExtArgs>
  }
  export type shipmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    logistics_providers?: boolean | logistics_providersDefaultArgs<ExtArgs>
  }
  export type shipmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    logistics_providers?: boolean | logistics_providersDefaultArgs<ExtArgs>
  }

  export type $shipmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shipments"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      logistics_providers: Prisma.$logistics_providersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      shipment_id: bigint
      order_id: bigint
      provider_id: bigint
      tracking_number: string | null
      estimated_delivery_date: Date | null
      actual_delivery_date: Date | null
      shipment_status: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["shipments"]>
    composites: {}
  }

  type shipmentsGetPayload<S extends boolean | null | undefined | shipmentsDefaultArgs> = $Result.GetResult<Prisma.$shipmentsPayload, S>

  type shipmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shipmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentsCountAggregateInputType | true
    }

  export interface shipmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shipments'], meta: { name: 'shipments' } }
    /**
     * Find zero or one Shipments that matches the filter.
     * @param {shipmentsFindUniqueArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shipmentsFindUniqueArgs>(args: SelectSubset<T, shipmentsFindUniqueArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shipmentsFindUniqueOrThrowArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shipmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, shipmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsFindFirstArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shipmentsFindFirstArgs>(args?: SelectSubset<T, shipmentsFindFirstArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsFindFirstOrThrowArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shipmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, shipmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipments.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipments.findMany({ take: 10 })
     * 
     * // Only select the `shipment_id`
     * const shipmentsWithShipment_idOnly = await prisma.shipments.findMany({ select: { shipment_id: true } })
     * 
     */
    findMany<T extends shipmentsFindManyArgs>(args?: SelectSubset<T, shipmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipments.
     * @param {shipmentsCreateArgs} args - Arguments to create a Shipments.
     * @example
     * // Create one Shipments
     * const Shipments = await prisma.shipments.create({
     *   data: {
     *     // ... data to create a Shipments
     *   }
     * })
     * 
     */
    create<T extends shipmentsCreateArgs>(args: SelectSubset<T, shipmentsCreateArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {shipmentsCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipments = await prisma.shipments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shipmentsCreateManyArgs>(args?: SelectSubset<T, shipmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {shipmentsCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipments = await prisma.shipments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `shipment_id`
     * const shipmentsWithShipment_idOnly = await prisma.shipments.createManyAndReturn({
     *   select: { shipment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shipmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, shipmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipments.
     * @param {shipmentsDeleteArgs} args - Arguments to delete one Shipments.
     * @example
     * // Delete one Shipments
     * const Shipments = await prisma.shipments.delete({
     *   where: {
     *     // ... filter to delete one Shipments
     *   }
     * })
     * 
     */
    delete<T extends shipmentsDeleteArgs>(args: SelectSubset<T, shipmentsDeleteArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipments.
     * @param {shipmentsUpdateArgs} args - Arguments to update one Shipments.
     * @example
     * // Update one Shipments
     * const shipments = await prisma.shipments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shipmentsUpdateArgs>(args: SelectSubset<T, shipmentsUpdateArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {shipmentsDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shipmentsDeleteManyArgs>(args?: SelectSubset<T, shipmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipments = await prisma.shipments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shipmentsUpdateManyArgs>(args: SelectSubset<T, shipmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {shipmentsUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipments = await prisma.shipments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `shipment_id`
     * const shipmentsWithShipment_idOnly = await prisma.shipments.updateManyAndReturn({
     *   select: { shipment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends shipmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, shipmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipments.
     * @param {shipmentsUpsertArgs} args - Arguments to update or create a Shipments.
     * @example
     * // Update or create a Shipments
     * const shipments = await prisma.shipments.upsert({
     *   create: {
     *     // ... data to create a Shipments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipments we want to update
     *   }
     * })
     */
    upsert<T extends shipmentsUpsertArgs>(args: SelectSubset<T, shipmentsUpsertArgs<ExtArgs>>): Prisma__shipmentsClient<$Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipments.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends shipmentsCountArgs>(
      args?: Subset<T, shipmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentsAggregateArgs>(args: Subset<T, ShipmentsAggregateArgs>): Prisma.PrismaPromise<GetShipmentsAggregateType<T>>

    /**
     * Group by Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsGroupByArgs} args - Group by arguments.
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
      T extends shipmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shipmentsGroupByArgs['orderBy'] }
        : { orderBy?: shipmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shipmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shipments model
   */
  readonly fields: shipmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shipments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shipmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logistics_providers<T extends logistics_providersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, logistics_providersDefaultArgs<ExtArgs>>): Prisma__logistics_providersClient<$Result.GetResult<Prisma.$logistics_providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the shipments model
   */
  interface shipmentsFieldRefs {
    readonly shipment_id: FieldRef<"shipments", 'BigInt'>
    readonly order_id: FieldRef<"shipments", 'BigInt'>
    readonly provider_id: FieldRef<"shipments", 'BigInt'>
    readonly tracking_number: FieldRef<"shipments", 'String'>
    readonly estimated_delivery_date: FieldRef<"shipments", 'DateTime'>
    readonly actual_delivery_date: FieldRef<"shipments", 'DateTime'>
    readonly shipment_status: FieldRef<"shipments", 'String'>
    readonly created_at: FieldRef<"shipments", 'DateTime'>
    readonly updated_at: FieldRef<"shipments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * shipments findUnique
   */
  export type shipmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * Filter, which shipments to fetch.
     */
    where: shipmentsWhereUniqueInput
  }

  /**
   * shipments findUniqueOrThrow
   */
  export type shipmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * Filter, which shipments to fetch.
     */
    where: shipmentsWhereUniqueInput
  }

  /**
   * shipments findFirst
   */
  export type shipmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * Filter, which shipments to fetch.
     */
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     */
    orderBy?: shipmentsOrderByWithRelationInput | shipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shipments.
     */
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shipments.
     */
    distinct?: ShipmentsScalarFieldEnum | ShipmentsScalarFieldEnum[]
  }

  /**
   * shipments findFirstOrThrow
   */
  export type shipmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * Filter, which shipments to fetch.
     */
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     */
    orderBy?: shipmentsOrderByWithRelationInput | shipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shipments.
     */
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shipments.
     */
    distinct?: ShipmentsScalarFieldEnum | ShipmentsScalarFieldEnum[]
  }

  /**
   * shipments findMany
   */
  export type shipmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * Filter, which shipments to fetch.
     */
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     */
    orderBy?: shipmentsOrderByWithRelationInput | shipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shipments.
     */
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     */
    skip?: number
    distinct?: ShipmentsScalarFieldEnum | ShipmentsScalarFieldEnum[]
  }

  /**
   * shipments create
   */
  export type shipmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a shipments.
     */
    data: XOR<shipmentsCreateInput, shipmentsUncheckedCreateInput>
  }

  /**
   * shipments createMany
   */
  export type shipmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shipments.
     */
    data: shipmentsCreateManyInput | shipmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shipments createManyAndReturn
   */
  export type shipmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * The data used to create many shipments.
     */
    data: shipmentsCreateManyInput | shipmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shipments update
   */
  export type shipmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a shipments.
     */
    data: XOR<shipmentsUpdateInput, shipmentsUncheckedUpdateInput>
    /**
     * Choose, which shipments to update.
     */
    where: shipmentsWhereUniqueInput
  }

  /**
   * shipments updateMany
   */
  export type shipmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shipments.
     */
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyInput>
    /**
     * Filter which shipments to update
     */
    where?: shipmentsWhereInput
    /**
     * Limit how many shipments to update.
     */
    limit?: number
  }

  /**
   * shipments updateManyAndReturn
   */
  export type shipmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * The data used to update shipments.
     */
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyInput>
    /**
     * Filter which shipments to update
     */
    where?: shipmentsWhereInput
    /**
     * Limit how many shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shipments upsert
   */
  export type shipmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the shipments to update in case it exists.
     */
    where: shipmentsWhereUniqueInput
    /**
     * In case the shipments found by the `where` argument doesn't exist, create a new shipments with this data.
     */
    create: XOR<shipmentsCreateInput, shipmentsUncheckedCreateInput>
    /**
     * In case the shipments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shipmentsUpdateInput, shipmentsUncheckedUpdateInput>
  }

  /**
   * shipments delete
   */
  export type shipmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
    /**
     * Filter which shipments to delete.
     */
    where: shipmentsWhereUniqueInput
  }

  /**
   * shipments deleteMany
   */
  export type shipmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipments to delete
     */
    where?: shipmentsWhereInput
    /**
     * Limit how many shipments to delete.
     */
    limit?: number
  }

  /**
   * shipments without action
   */
  export type shipmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipments
     */
    select?: shipmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shipments
     */
    omit?: shipmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shipmentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: bigint | null
    user_type: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: bigint | null
    user_type: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_type: number
    first_name: number
    last_name: number
    email: number
    phone_number: number
    address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_type?: true
    first_name?: true
    last_name?: true
    email?: true
    phone_number?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_type?: true
    first_name?: true
    last_name?: true
    email?: true
    phone_number?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_type?: true
    first_name?: true
    last_name?: true
    email?: true
    phone_number?: true
    address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: bigint
    user_type: string
    first_name: string
    last_name: string
    email: string | null
    phone_number: string
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    gifts_gifts_gift_receiver_idTousers?: boolean | users$gifts_gifts_gift_receiver_idTousersArgs<ExtArgs>
    gifts_gifts_gift_sender_idTousers?: boolean | users$gifts_gifts_gift_sender_idTousersArgs<ExtArgs>
    merchants?: boolean | users$merchantsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_type" | "first_name" | "last_name" | "email" | "phone_number" | "address" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts_gifts_gift_receiver_idTousers?: boolean | users$gifts_gifts_gift_receiver_idTousersArgs<ExtArgs>
    gifts_gifts_gift_sender_idTousers?: boolean | users$gifts_gifts_gift_sender_idTousersArgs<ExtArgs>
    merchants?: boolean | users$merchantsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      gifts_gifts_gift_receiver_idTousers: Prisma.$giftsPayload<ExtArgs>[]
      gifts_gifts_gift_sender_idTousers: Prisma.$giftsPayload<ExtArgs>[]
      merchants: Prisma.$merchantsPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      user_type: string
      first_name: string
      last_name: string
      email: string | null
      phone_number: string
      address: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gifts_gifts_gift_receiver_idTousers<T extends users$gifts_gifts_gift_receiver_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$gifts_gifts_gift_receiver_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gifts_gifts_gift_sender_idTousers<T extends users$gifts_gifts_gift_sender_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$gifts_gifts_gift_sender_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    merchants<T extends users$merchantsArgs<ExtArgs> = {}>(args?: Subset<T, users$merchantsArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'BigInt'>
    readonly user_type: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.gifts_gifts_gift_receiver_idTousers
   */
  export type users$gifts_gifts_gift_receiver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    where?: giftsWhereInput
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    cursor?: giftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftsScalarFieldEnum | GiftsScalarFieldEnum[]
  }

  /**
   * users.gifts_gifts_gift_sender_idTousers
   */
  export type users$gifts_gifts_gift_sender_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gifts
     */
    select?: giftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gifts
     */
    omit?: giftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: giftsInclude<ExtArgs> | null
    where?: giftsWhereInput
    orderBy?: giftsOrderByWithRelationInput | giftsOrderByWithRelationInput[]
    cursor?: giftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftsScalarFieldEnum | GiftsScalarFieldEnum[]
  }

  /**
   * users.merchants
   */
  export type users$merchantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantsInclude<ExtArgs> | null
    where?: merchantsWhereInput
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    parent_category_id: 'parent_category_id',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const DiscountsScalarFieldEnum: {
    discount_id: 'discount_id',
    product_id: 'product_id',
    discount_percentage: 'discount_percentage',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at'
  };

  export type DiscountsScalarFieldEnum = (typeof DiscountsScalarFieldEnum)[keyof typeof DiscountsScalarFieldEnum]


  export const GiftsScalarFieldEnum: {
    gift_id: 'gift_id',
    gift_sender_id: 'gift_sender_id',
    gift_receiver_id: 'gift_receiver_id',
    receiver_phone: 'receiver_phone',
    receiver_email: 'receiver_email',
    receiver_address: 'receiver_address',
    message: 'message',
    order_id: 'order_id',
    created_at: 'created_at'
  };

  export type GiftsScalarFieldEnum = (typeof GiftsScalarFieldEnum)[keyof typeof GiftsScalarFieldEnum]


  export const Logistics_providersScalarFieldEnum: {
    provider_id: 'provider_id',
    name: 'name',
    contact_phone: 'contact_phone',
    contact_email: 'contact_email',
    created_at: 'created_at'
  };

  export type Logistics_providersScalarFieldEnum = (typeof Logistics_providersScalarFieldEnum)[keyof typeof Logistics_providersScalarFieldEnum]


  export const MerchantsScalarFieldEnum: {
    merchant_id: 'merchant_id',
    user_id: 'user_id',
    business_name: 'business_name',
    business_license: 'business_license',
    store_description: 'store_description',
    is_verified: 'is_verified',
    created_at: 'created_at'
  };

  export type MerchantsScalarFieldEnum = (typeof MerchantsScalarFieldEnum)[keyof typeof MerchantsScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    order_item_id: 'order_item_id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    subtotal: 'subtotal',
    created_at: 'created_at'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    customer_id: 'customer_id',
    merchant_id: 'merchant_id',
    order_status: 'order_status',
    total_amount: 'total_amount',
    shipping_address: 'shipping_address',
    delivery_type: 'delivery_type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    payment_id: 'payment_id',
    order_id: 'order_id',
    transaction_id: 'transaction_id',
    amount: 'amount',
    payment_status: 'payment_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    merchant_id: 'merchant_id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock_quantity: 'stock_quantity',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    review_id: 'review_id',
    product_id: 'product_id',
    customer_id: 'customer_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const ShipmentsScalarFieldEnum: {
    shipment_id: 'shipment_id',
    order_id: 'order_id',
    provider_id: 'provider_id',
    tracking_number: 'tracking_number',
    estimated_delivery_date: 'estimated_delivery_date',
    actual_delivery_date: 'actual_delivery_date',
    shipment_status: 'shipment_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ShipmentsScalarFieldEnum = (typeof ShipmentsScalarFieldEnum)[keyof typeof ShipmentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_type: 'user_type',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: BigIntFilter<"categories"> | bigint | number
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    parent_category_id?: BigIntNullableFilter<"categories"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    other_categories?: CategoriesListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parent_category_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    categories?: categoriesOrderByWithRelationInput
    other_categories?: categoriesOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: bigint | number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    description?: StringNullableFilter<"categories"> | string | null
    parent_category_id?: BigIntNullableFilter<"categories"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    other_categories?: CategoriesListRelationFilter
    products?: ProductsListRelationFilter
  }, "category_id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parent_category_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: BigIntWithAggregatesFilter<"categories"> | bigint | number
    name?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    parent_category_id?: BigIntNullableWithAggregatesFilter<"categories"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type discountsWhereInput = {
    AND?: discountsWhereInput | discountsWhereInput[]
    OR?: discountsWhereInput[]
    NOT?: discountsWhereInput | discountsWhereInput[]
    discount_id?: BigIntFilter<"discounts"> | bigint | number
    product_id?: BigIntFilter<"discounts"> | bigint | number
    discount_percentage?: DecimalFilter<"discounts"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"discounts"> | Date | string
    end_date?: DateTimeFilter<"discounts"> | Date | string
    created_at?: DateTimeNullableFilter<"discounts"> | Date | string | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type discountsOrderByWithRelationInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type discountsWhereUniqueInput = Prisma.AtLeast<{
    discount_id?: bigint | number
    AND?: discountsWhereInput | discountsWhereInput[]
    OR?: discountsWhereInput[]
    NOT?: discountsWhereInput | discountsWhereInput[]
    product_id?: BigIntFilter<"discounts"> | bigint | number
    discount_percentage?: DecimalFilter<"discounts"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"discounts"> | Date | string
    end_date?: DateTimeFilter<"discounts"> | Date | string
    created_at?: DateTimeNullableFilter<"discounts"> | Date | string | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "discount_id">

  export type discountsOrderByWithAggregationInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: discountsCountOrderByAggregateInput
    _avg?: discountsAvgOrderByAggregateInput
    _max?: discountsMaxOrderByAggregateInput
    _min?: discountsMinOrderByAggregateInput
    _sum?: discountsSumOrderByAggregateInput
  }

  export type discountsScalarWhereWithAggregatesInput = {
    AND?: discountsScalarWhereWithAggregatesInput | discountsScalarWhereWithAggregatesInput[]
    OR?: discountsScalarWhereWithAggregatesInput[]
    NOT?: discountsScalarWhereWithAggregatesInput | discountsScalarWhereWithAggregatesInput[]
    discount_id?: BigIntWithAggregatesFilter<"discounts"> | bigint | number
    product_id?: BigIntWithAggregatesFilter<"discounts"> | bigint | number
    discount_percentage?: DecimalWithAggregatesFilter<"discounts"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeWithAggregatesFilter<"discounts"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"discounts"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"discounts"> | Date | string | null
  }

  export type giftsWhereInput = {
    AND?: giftsWhereInput | giftsWhereInput[]
    OR?: giftsWhereInput[]
    NOT?: giftsWhereInput | giftsWhereInput[]
    gift_id?: BigIntFilter<"gifts"> | bigint | number
    gift_sender_id?: BigIntFilter<"gifts"> | bigint | number
    gift_receiver_id?: BigIntNullableFilter<"gifts"> | bigint | number | null
    receiver_phone?: StringNullableFilter<"gifts"> | string | null
    receiver_email?: StringNullableFilter<"gifts"> | string | null
    receiver_address?: StringFilter<"gifts"> | string
    message?: StringNullableFilter<"gifts"> | string | null
    order_id?: BigIntFilter<"gifts"> | bigint | number
    created_at?: DateTimeNullableFilter<"gifts"> | Date | string | null
    users_gifts_gift_receiver_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_gifts_gift_sender_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type giftsOrderByWithRelationInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrderInput | SortOrder
    receiver_phone?: SortOrderInput | SortOrder
    receiver_email?: SortOrderInput | SortOrder
    receiver_address?: SortOrder
    message?: SortOrderInput | SortOrder
    order_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users_gifts_gift_receiver_idTousers?: usersOrderByWithRelationInput
    users_gifts_gift_sender_idTousers?: usersOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
  }

  export type giftsWhereUniqueInput = Prisma.AtLeast<{
    gift_id?: bigint | number
    AND?: giftsWhereInput | giftsWhereInput[]
    OR?: giftsWhereInput[]
    NOT?: giftsWhereInput | giftsWhereInput[]
    gift_sender_id?: BigIntFilter<"gifts"> | bigint | number
    gift_receiver_id?: BigIntNullableFilter<"gifts"> | bigint | number | null
    receiver_phone?: StringNullableFilter<"gifts"> | string | null
    receiver_email?: StringNullableFilter<"gifts"> | string | null
    receiver_address?: StringFilter<"gifts"> | string
    message?: StringNullableFilter<"gifts"> | string | null
    order_id?: BigIntFilter<"gifts"> | bigint | number
    created_at?: DateTimeNullableFilter<"gifts"> | Date | string | null
    users_gifts_gift_receiver_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_gifts_gift_sender_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "gift_id">

  export type giftsOrderByWithAggregationInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrderInput | SortOrder
    receiver_phone?: SortOrderInput | SortOrder
    receiver_email?: SortOrderInput | SortOrder
    receiver_address?: SortOrder
    message?: SortOrderInput | SortOrder
    order_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: giftsCountOrderByAggregateInput
    _avg?: giftsAvgOrderByAggregateInput
    _max?: giftsMaxOrderByAggregateInput
    _min?: giftsMinOrderByAggregateInput
    _sum?: giftsSumOrderByAggregateInput
  }

  export type giftsScalarWhereWithAggregatesInput = {
    AND?: giftsScalarWhereWithAggregatesInput | giftsScalarWhereWithAggregatesInput[]
    OR?: giftsScalarWhereWithAggregatesInput[]
    NOT?: giftsScalarWhereWithAggregatesInput | giftsScalarWhereWithAggregatesInput[]
    gift_id?: BigIntWithAggregatesFilter<"gifts"> | bigint | number
    gift_sender_id?: BigIntWithAggregatesFilter<"gifts"> | bigint | number
    gift_receiver_id?: BigIntNullableWithAggregatesFilter<"gifts"> | bigint | number | null
    receiver_phone?: StringNullableWithAggregatesFilter<"gifts"> | string | null
    receiver_email?: StringNullableWithAggregatesFilter<"gifts"> | string | null
    receiver_address?: StringWithAggregatesFilter<"gifts"> | string
    message?: StringNullableWithAggregatesFilter<"gifts"> | string | null
    order_id?: BigIntWithAggregatesFilter<"gifts"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"gifts"> | Date | string | null
  }

  export type logistics_providersWhereInput = {
    AND?: logistics_providersWhereInput | logistics_providersWhereInput[]
    OR?: logistics_providersWhereInput[]
    NOT?: logistics_providersWhereInput | logistics_providersWhereInput[]
    provider_id?: BigIntFilter<"logistics_providers"> | bigint | number
    name?: StringFilter<"logistics_providers"> | string
    contact_phone?: StringFilter<"logistics_providers"> | string
    contact_email?: StringNullableFilter<"logistics_providers"> | string | null
    created_at?: DateTimeNullableFilter<"logistics_providers"> | Date | string | null
    shipments?: ShipmentsListRelationFilter
  }

  export type logistics_providersOrderByWithRelationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    shipments?: shipmentsOrderByRelationAggregateInput
  }

  export type logistics_providersWhereUniqueInput = Prisma.AtLeast<{
    provider_id?: bigint | number
    AND?: logistics_providersWhereInput | logistics_providersWhereInput[]
    OR?: logistics_providersWhereInput[]
    NOT?: logistics_providersWhereInput | logistics_providersWhereInput[]
    name?: StringFilter<"logistics_providers"> | string
    contact_phone?: StringFilter<"logistics_providers"> | string
    contact_email?: StringNullableFilter<"logistics_providers"> | string | null
    created_at?: DateTimeNullableFilter<"logistics_providers"> | Date | string | null
    shipments?: ShipmentsListRelationFilter
  }, "provider_id">

  export type logistics_providersOrderByWithAggregationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: logistics_providersCountOrderByAggregateInput
    _avg?: logistics_providersAvgOrderByAggregateInput
    _max?: logistics_providersMaxOrderByAggregateInput
    _min?: logistics_providersMinOrderByAggregateInput
    _sum?: logistics_providersSumOrderByAggregateInput
  }

  export type logistics_providersScalarWhereWithAggregatesInput = {
    AND?: logistics_providersScalarWhereWithAggregatesInput | logistics_providersScalarWhereWithAggregatesInput[]
    OR?: logistics_providersScalarWhereWithAggregatesInput[]
    NOT?: logistics_providersScalarWhereWithAggregatesInput | logistics_providersScalarWhereWithAggregatesInput[]
    provider_id?: BigIntWithAggregatesFilter<"logistics_providers"> | bigint | number
    name?: StringWithAggregatesFilter<"logistics_providers"> | string
    contact_phone?: StringWithAggregatesFilter<"logistics_providers"> | string
    contact_email?: StringNullableWithAggregatesFilter<"logistics_providers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"logistics_providers"> | Date | string | null
  }

  export type merchantsWhereInput = {
    AND?: merchantsWhereInput | merchantsWhereInput[]
    OR?: merchantsWhereInput[]
    NOT?: merchantsWhereInput | merchantsWhereInput[]
    merchant_id?: BigIntFilter<"merchants"> | bigint | number
    user_id?: BigIntFilter<"merchants"> | bigint | number
    business_name?: StringFilter<"merchants"> | string
    business_license?: StringNullableFilter<"merchants"> | string | null
    store_description?: StringNullableFilter<"merchants"> | string | null
    is_verified?: BoolNullableFilter<"merchants"> | boolean | null
    created_at?: DateTimeNullableFilter<"merchants"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    orders?: OrdersListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type merchantsOrderByWithRelationInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrderInput | SortOrder
    store_description?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
  }

  export type merchantsWhereUniqueInput = Prisma.AtLeast<{
    merchant_id?: bigint | number
    user_id?: bigint | number
    business_license?: string
    AND?: merchantsWhereInput | merchantsWhereInput[]
    OR?: merchantsWhereInput[]
    NOT?: merchantsWhereInput | merchantsWhereInput[]
    business_name?: StringFilter<"merchants"> | string
    store_description?: StringNullableFilter<"merchants"> | string | null
    is_verified?: BoolNullableFilter<"merchants"> | boolean | null
    created_at?: DateTimeNullableFilter<"merchants"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    orders?: OrdersListRelationFilter
    products?: ProductsListRelationFilter
  }, "merchant_id" | "user_id" | "business_license">

  export type merchantsOrderByWithAggregationInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrderInput | SortOrder
    store_description?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: merchantsCountOrderByAggregateInput
    _avg?: merchantsAvgOrderByAggregateInput
    _max?: merchantsMaxOrderByAggregateInput
    _min?: merchantsMinOrderByAggregateInput
    _sum?: merchantsSumOrderByAggregateInput
  }

  export type merchantsScalarWhereWithAggregatesInput = {
    AND?: merchantsScalarWhereWithAggregatesInput | merchantsScalarWhereWithAggregatesInput[]
    OR?: merchantsScalarWhereWithAggregatesInput[]
    NOT?: merchantsScalarWhereWithAggregatesInput | merchantsScalarWhereWithAggregatesInput[]
    merchant_id?: BigIntWithAggregatesFilter<"merchants"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"merchants"> | bigint | number
    business_name?: StringWithAggregatesFilter<"merchants"> | string
    business_license?: StringNullableWithAggregatesFilter<"merchants"> | string | null
    store_description?: StringNullableWithAggregatesFilter<"merchants"> | string | null
    is_verified?: BoolNullableWithAggregatesFilter<"merchants"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"merchants"> | Date | string | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_item_id?: BigIntFilter<"order_items"> | bigint | number
    order_id?: BigIntFilter<"order_items"> | bigint | number
    product_id?: BigIntFilter<"order_items"> | bigint | number
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_items"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    order_item_id?: bigint | number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: BigIntFilter<"order_items"> | bigint | number
    product_id?: BigIntFilter<"order_items"> | bigint | number
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_items"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "order_item_id">

  export type order_itemsOrderByWithAggregationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    order_item_id?: BigIntWithAggregatesFilter<"order_items"> | bigint | number
    order_id?: BigIntWithAggregatesFilter<"order_items"> | bigint | number
    product_id?: BigIntWithAggregatesFilter<"order_items"> | bigint | number
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    unit_price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"order_items"> | Date | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_id?: BigIntFilter<"orders"> | bigint | number
    customer_id?: BigIntFilter<"orders"> | bigint | number
    merchant_id?: BigIntFilter<"orders"> | bigint | number
    order_status?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFilter<"orders"> | string
    delivery_type?: StringFilter<"orders"> | string
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    gifts?: GiftsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    merchants?: XOR<MerchantsScalarRelationFilter, merchantsWhereInput>
    payments?: PaymentsListRelationFilter
    shipments?: ShipmentsListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    delivery_type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    gifts?: giftsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    merchants?: merchantsOrderByWithRelationInput
    payments?: paymentsOrderByRelationAggregateInput
    shipments?: shipmentsOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: bigint | number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_id?: BigIntFilter<"orders"> | bigint | number
    merchant_id?: BigIntFilter<"orders"> | bigint | number
    order_status?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFilter<"orders"> | string
    delivery_type?: StringFilter<"orders"> | string
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    gifts?: GiftsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    merchants?: XOR<MerchantsScalarRelationFilter, merchantsWhereInput>
    payments?: PaymentsListRelationFilter
    shipments?: ShipmentsListRelationFilter
  }, "order_id">

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    delivery_type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    order_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    customer_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    merchant_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    order_status?: StringWithAggregatesFilter<"orders"> | string
    total_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringWithAggregatesFilter<"orders"> | string
    delivery_type?: StringWithAggregatesFilter<"orders"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    payment_id?: BigIntFilter<"payments"> | bigint | number
    order_id?: BigIntFilter<"payments"> | bigint | number
    transaction_id?: StringFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringFilter<"payments"> | string
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: bigint | number
    transaction_id?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    order_id?: BigIntFilter<"payments"> | bigint | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringFilter<"payments"> | string
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "payment_id" | "transaction_id">

  export type paymentsOrderByWithAggregationInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    payment_id?: BigIntWithAggregatesFilter<"payments"> | bigint | number
    order_id?: BigIntWithAggregatesFilter<"payments"> | bigint | number
    transaction_id?: StringWithAggregatesFilter<"payments"> | string
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringWithAggregatesFilter<"payments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_id?: BigIntFilter<"products"> | bigint | number
    merchant_id?: BigIntFilter<"products"> | bigint | number
    category_id?: BigIntFilter<"products"> | bigint | number
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFilter<"products"> | number
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    discounts?: DiscountsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    merchants?: XOR<MerchantsScalarRelationFilter, merchantsWhereInput>
    reviews?: ReviewsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    discounts?: discountsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    merchants?: merchantsOrderByWithRelationInput
    reviews?: reviewsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: bigint | number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    merchant_id?: BigIntFilter<"products"> | bigint | number
    category_id?: BigIntFilter<"products"> | bigint | number
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFilter<"products"> | number
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    discounts?: DiscountsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    merchants?: XOR<MerchantsScalarRelationFilter, merchantsWhereInput>
    reviews?: ReviewsListRelationFilter
  }, "product_id">

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    product_id?: BigIntWithAggregatesFilter<"products"> | bigint | number
    merchant_id?: BigIntWithAggregatesFilter<"products"> | bigint | number
    category_id?: BigIntWithAggregatesFilter<"products"> | bigint | number
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntWithAggregatesFilter<"products"> | number
    is_active?: BoolNullableWithAggregatesFilter<"products"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    review_id?: BigIntFilter<"reviews"> | bigint | number
    product_id?: BigIntFilter<"reviews"> | bigint | number
    customer_id?: BigIntFilter<"reviews"> | bigint | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type reviewsOrderByWithRelationInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: bigint | number
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    product_id?: BigIntFilter<"reviews"> | bigint | number
    customer_id?: BigIntFilter<"reviews"> | bigint | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "review_id">

  export type reviewsOrderByWithAggregationInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    review_id?: BigIntWithAggregatesFilter<"reviews"> | bigint | number
    product_id?: BigIntWithAggregatesFilter<"reviews"> | bigint | number
    customer_id?: BigIntWithAggregatesFilter<"reviews"> | bigint | number
    rating?: IntWithAggregatesFilter<"reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null
  }

  export type shipmentsWhereInput = {
    AND?: shipmentsWhereInput | shipmentsWhereInput[]
    OR?: shipmentsWhereInput[]
    NOT?: shipmentsWhereInput | shipmentsWhereInput[]
    shipment_id?: BigIntFilter<"shipments"> | bigint | number
    order_id?: BigIntFilter<"shipments"> | bigint | number
    provider_id?: BigIntFilter<"shipments"> | bigint | number
    tracking_number?: StringNullableFilter<"shipments"> | string | null
    estimated_delivery_date?: DateTimeNullableFilter<"shipments"> | Date | string | null
    actual_delivery_date?: DateTimeNullableFilter<"shipments"> | Date | string | null
    shipment_status?: StringFilter<"shipments"> | string
    created_at?: DateTimeNullableFilter<"shipments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"shipments"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    logistics_providers?: XOR<Logistics_providersScalarRelationFilter, logistics_providersWhereInput>
  }

  export type shipmentsOrderByWithRelationInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
    tracking_number?: SortOrderInput | SortOrder
    estimated_delivery_date?: SortOrderInput | SortOrder
    actual_delivery_date?: SortOrderInput | SortOrder
    shipment_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    logistics_providers?: logistics_providersOrderByWithRelationInput
  }

  export type shipmentsWhereUniqueInput = Prisma.AtLeast<{
    shipment_id?: bigint | number
    tracking_number?: string
    AND?: shipmentsWhereInput | shipmentsWhereInput[]
    OR?: shipmentsWhereInput[]
    NOT?: shipmentsWhereInput | shipmentsWhereInput[]
    order_id?: BigIntFilter<"shipments"> | bigint | number
    provider_id?: BigIntFilter<"shipments"> | bigint | number
    estimated_delivery_date?: DateTimeNullableFilter<"shipments"> | Date | string | null
    actual_delivery_date?: DateTimeNullableFilter<"shipments"> | Date | string | null
    shipment_status?: StringFilter<"shipments"> | string
    created_at?: DateTimeNullableFilter<"shipments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"shipments"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    logistics_providers?: XOR<Logistics_providersScalarRelationFilter, logistics_providersWhereInput>
  }, "shipment_id" | "tracking_number">

  export type shipmentsOrderByWithAggregationInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
    tracking_number?: SortOrderInput | SortOrder
    estimated_delivery_date?: SortOrderInput | SortOrder
    actual_delivery_date?: SortOrderInput | SortOrder
    shipment_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: shipmentsCountOrderByAggregateInput
    _avg?: shipmentsAvgOrderByAggregateInput
    _max?: shipmentsMaxOrderByAggregateInput
    _min?: shipmentsMinOrderByAggregateInput
    _sum?: shipmentsSumOrderByAggregateInput
  }

  export type shipmentsScalarWhereWithAggregatesInput = {
    AND?: shipmentsScalarWhereWithAggregatesInput | shipmentsScalarWhereWithAggregatesInput[]
    OR?: shipmentsScalarWhereWithAggregatesInput[]
    NOT?: shipmentsScalarWhereWithAggregatesInput | shipmentsScalarWhereWithAggregatesInput[]
    shipment_id?: BigIntWithAggregatesFilter<"shipments"> | bigint | number
    order_id?: BigIntWithAggregatesFilter<"shipments"> | bigint | number
    provider_id?: BigIntWithAggregatesFilter<"shipments"> | bigint | number
    tracking_number?: StringNullableWithAggregatesFilter<"shipments"> | string | null
    estimated_delivery_date?: DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null
    actual_delivery_date?: DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null
    shipment_status?: StringWithAggregatesFilter<"shipments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: BigIntFilter<"users"> | bigint | number
    user_type?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    phone_number?: StringFilter<"users"> | string
    address?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: GiftsListRelationFilter
    gifts_gifts_gift_sender_idTousers?: GiftsListRelationFilter
    merchants?: XOR<MerchantsNullableScalarRelationFilter, merchantsWhereInput> | null
    orders?: OrdersListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    gifts_gifts_gift_receiver_idTousers?: giftsOrderByRelationAggregateInput
    gifts_gifts_gift_sender_idTousers?: giftsOrderByRelationAggregateInput
    merchants?: merchantsOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number
    email?: string
    phone_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_type?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    address?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: GiftsListRelationFilter
    gifts_gifts_gift_sender_idTousers?: GiftsListRelationFilter
    merchants?: XOR<MerchantsNullableScalarRelationFilter, merchantsWhereInput> | null
    orders?: OrdersListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "user_id" | "email" | "phone_number">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    user_type?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone_number?: StringWithAggregatesFilter<"users"> | string
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type categoriesCreateInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    parent_category_id?: bigint | number | null
    created_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    parent_category_id?: bigint | number | null
    created_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discountsCreateInput = {
    discount_id?: bigint | number
    discount_percentage: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutDiscountsInput
  }

  export type discountsUncheckedCreateInput = {
    discount_id?: bigint | number
    product_id: bigint | number
    discount_percentage: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string | null
  }

  export type discountsUpdateInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutDiscountsNestedInput
  }

  export type discountsUncheckedUpdateInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discountsCreateManyInput = {
    discount_id?: bigint | number
    product_id: bigint | number
    discount_percentage: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string | null
  }

  export type discountsUpdateManyMutationInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discountsUncheckedUpdateManyInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsCreateInput = {
    gift_id?: bigint | number
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    created_at?: Date | string | null
    users_gifts_gift_receiver_idTousers?: usersCreateNestedOneWithoutGifts_gifts_gift_receiver_idTousersInput
    users_gifts_gift_sender_idTousers: usersCreateNestedOneWithoutGifts_gifts_gift_sender_idTousersInput
    orders: ordersCreateNestedOneWithoutGiftsInput
  }

  export type giftsUncheckedCreateInput = {
    gift_id?: bigint | number
    gift_sender_id: bigint | number
    gift_receiver_id?: bigint | number | null
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    order_id: bigint | number
    created_at?: Date | string | null
  }

  export type giftsUpdateInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_gifts_gift_receiver_idTousers?: usersUpdateOneWithoutGifts_gifts_gift_receiver_idTousersNestedInput
    users_gifts_gift_sender_idTousers?: usersUpdateOneRequiredWithoutGifts_gifts_gift_sender_idTousersNestedInput
    orders?: ordersUpdateOneRequiredWithoutGiftsNestedInput
  }

  export type giftsUncheckedUpdateInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_receiver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsCreateManyInput = {
    gift_id?: bigint | number
    gift_sender_id: bigint | number
    gift_receiver_id?: bigint | number | null
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    order_id: bigint | number
    created_at?: Date | string | null
  }

  export type giftsUpdateManyMutationInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsUncheckedUpdateManyInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_receiver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logistics_providersCreateInput = {
    provider_id?: bigint | number
    name: string
    contact_phone: string
    contact_email?: string | null
    created_at?: Date | string | null
    shipments?: shipmentsCreateNestedManyWithoutLogistics_providersInput
  }

  export type logistics_providersUncheckedCreateInput = {
    provider_id?: bigint | number
    name: string
    contact_phone: string
    contact_email?: string | null
    created_at?: Date | string | null
    shipments?: shipmentsUncheckedCreateNestedManyWithoutLogistics_providersInput
  }

  export type logistics_providersUpdateInput = {
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipments?: shipmentsUpdateManyWithoutLogistics_providersNestedInput
  }

  export type logistics_providersUncheckedUpdateInput = {
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipments?: shipmentsUncheckedUpdateManyWithoutLogistics_providersNestedInput
  }

  export type logistics_providersCreateManyInput = {
    provider_id?: bigint | number
    name: string
    contact_phone: string
    contact_email?: string | null
    created_at?: Date | string | null
  }

  export type logistics_providersUpdateManyMutationInput = {
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logistics_providersUncheckedUpdateManyInput = {
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type merchantsCreateInput = {
    merchant_id?: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutMerchantsInput
    orders?: ordersCreateNestedManyWithoutMerchantsInput
    products?: productsCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsUncheckedCreateInput = {
    merchant_id?: bigint | number
    user_id: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutMerchantsInput
    products?: productsUncheckedCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsUpdateInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMerchantsNestedInput
    orders?: ordersUpdateManyWithoutMerchantsNestedInput
    products?: productsUpdateManyWithoutMerchantsNestedInput
  }

  export type merchantsUncheckedUpdateInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutMerchantsNestedInput
    products?: productsUncheckedUpdateManyWithoutMerchantsNestedInput
  }

  export type merchantsCreateManyInput = {
    merchant_id?: bigint | number
    user_id: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
  }

  export type merchantsUpdateManyMutationInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type merchantsUncheckedUpdateManyInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateInput = {
    order_item_id?: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    order_item_id?: bigint | number
    order_id: bigint | number
    product_id: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsUpdateInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateManyInput = {
    order_item_id?: bigint | number
    order_id: bigint | number
    product_id: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsUpdateManyMutationInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    merchants: merchantsCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateInput = {
    payment_id?: bigint | number
    transaction_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    payment_id?: bigint | number
    order_id: bigint | number
    transaction_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsUpdateInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateManyInput = {
    payment_id?: bigint | number
    order_id: bigint | number
    transaction_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsUpdateManyMutationInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    product_id?: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    merchants: merchantsCreateNestedOneWithoutProductsInput
    reviews?: reviewsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutProductsNestedInput
    reviews?: reviewsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsCreateInput = {
    review_id?: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutReviewsInput
    products: productsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    review_id?: bigint | number
    product_id: bigint | number
    customer_id: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsUpdateInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutReviewsNestedInput
    products?: productsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsCreateManyInput = {
    review_id?: bigint | number
    product_id: bigint | number
    customer_id: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsUpdateManyMutationInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsCreateInput = {
    shipment_id?: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutShipmentsInput
    logistics_providers: logistics_providersCreateNestedOneWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateInput = {
    shipment_id?: bigint | number
    order_id: bigint | number
    provider_id: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type shipmentsUpdateInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutShipmentsNestedInput
    logistics_providers?: logistics_providersUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsCreateManyInput = {
    shipment_id?: bigint | number
    order_id: bigint | number
    provider_id: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type shipmentsUpdateManyMutationInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsUncheckedUpdateManyInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsUncheckedCreateNestedOneWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUpdateOneWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUncheckedUpdateOneWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_category_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
    parent_category_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_category_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_category_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
    parent_category_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type discountsCountOrderByAggregateInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type discountsAvgOrderByAggregateInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
  }

  export type discountsMaxOrderByAggregateInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type discountsMinOrderByAggregateInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type discountsSumOrderByAggregateInput = {
    discount_id?: SortOrder
    product_id?: SortOrder
    discount_percentage?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type giftsCountOrderByAggregateInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrder
    receiver_phone?: SortOrder
    receiver_email?: SortOrder
    receiver_address?: SortOrder
    message?: SortOrder
    order_id?: SortOrder
    created_at?: SortOrder
  }

  export type giftsAvgOrderByAggregateInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrder
    order_id?: SortOrder
  }

  export type giftsMaxOrderByAggregateInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrder
    receiver_phone?: SortOrder
    receiver_email?: SortOrder
    receiver_address?: SortOrder
    message?: SortOrder
    order_id?: SortOrder
    created_at?: SortOrder
  }

  export type giftsMinOrderByAggregateInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrder
    receiver_phone?: SortOrder
    receiver_email?: SortOrder
    receiver_address?: SortOrder
    message?: SortOrder
    order_id?: SortOrder
    created_at?: SortOrder
  }

  export type giftsSumOrderByAggregateInput = {
    gift_id?: SortOrder
    gift_sender_id?: SortOrder
    gift_receiver_id?: SortOrder
    order_id?: SortOrder
  }

  export type ShipmentsListRelationFilter = {
    every?: shipmentsWhereInput
    some?: shipmentsWhereInput
    none?: shipmentsWhereInput
  }

  export type shipmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logistics_providersCountOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
  }

  export type logistics_providersAvgOrderByAggregateInput = {
    provider_id?: SortOrder
  }

  export type logistics_providersMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
  }

  export type logistics_providersMinOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    contact_phone?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
  }

  export type logistics_providersSumOrderByAggregateInput = {
    provider_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type merchantsCountOrderByAggregateInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    store_description?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
  }

  export type merchantsAvgOrderByAggregateInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
  }

  export type merchantsMaxOrderByAggregateInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    store_description?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
  }

  export type merchantsMinOrderByAggregateInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    store_description?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
  }

  export type merchantsSumOrderByAggregateInput = {
    merchant_id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type order_itemsCountOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type GiftsListRelationFilter = {
    every?: giftsWhereInput
    some?: giftsWhereInput
    none?: giftsWhereInput
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type MerchantsScalarRelationFilter = {
    is?: merchantsWhereInput
    isNot?: merchantsWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type giftsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    delivery_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    total_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    delivery_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    order_status?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    delivery_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    total_amount?: SortOrder
  }

  export type paymentsCountOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type DiscountsListRelationFilter = {
    every?: discountsWhereInput
    some?: discountsWhereInput
    none?: discountsWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type discountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder
    merchant_id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    stock_quantity?: SortOrder
  }

  export type reviewsCountOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    rating?: SortOrder
  }

  export type Logistics_providersScalarRelationFilter = {
    is?: logistics_providersWhereInput
    isNot?: logistics_providersWhereInput
  }

  export type shipmentsCountOrderByAggregateInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
    tracking_number?: SortOrder
    estimated_delivery_date?: SortOrder
    actual_delivery_date?: SortOrder
    shipment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type shipmentsAvgOrderByAggregateInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
  }

  export type shipmentsMaxOrderByAggregateInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
    tracking_number?: SortOrder
    estimated_delivery_date?: SortOrder
    actual_delivery_date?: SortOrder
    shipment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type shipmentsMinOrderByAggregateInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
    tracking_number?: SortOrder
    estimated_delivery_date?: SortOrder
    actual_delivery_date?: SortOrder
    shipment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type shipmentsSumOrderByAggregateInput = {
    shipment_id?: SortOrder
    order_id?: SortOrder
    provider_id?: SortOrder
  }

  export type MerchantsNullableScalarRelationFilter = {
    is?: merchantsWhereInput | null
    isNot?: merchantsWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type categoriesCreateNestedOneWithoutOther_categoriesInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type categoriesUpdateOneWithoutOther_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput
    upsert?: categoriesUpsertWithoutOther_categoriesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutOther_categoriesInput, categoriesUpdateWithoutOther_categoriesInput>, categoriesUncheckedUpdateWithoutOther_categoriesInput>
  }

  export type categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCategoriesInput | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCategoriesInput | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCategoriesInput | categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCategoriesInput | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCategoriesInput | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCategoriesInput | categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutDiscountsInput = {
    create?: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: productsCreateOrConnectWithoutDiscountsInput
    connect?: productsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productsUpdateOneRequiredWithoutDiscountsNestedInput = {
    create?: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: productsCreateOrConnectWithoutDiscountsInput
    upsert?: productsUpsertWithoutDiscountsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutDiscountsInput, productsUpdateWithoutDiscountsInput>, productsUncheckedUpdateWithoutDiscountsInput>
  }

  export type usersCreateNestedOneWithoutGifts_gifts_gift_receiver_idTousersInput = {
    create?: XOR<usersCreateWithoutGifts_gifts_gift_receiver_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_receiver_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutGifts_gifts_gift_receiver_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutGifts_gifts_gift_sender_idTousersInput = {
    create?: XOR<usersCreateWithoutGifts_gifts_gift_sender_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_sender_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutGifts_gifts_gift_sender_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutGiftsInput = {
    create?: XOR<ordersCreateWithoutGiftsInput, ordersUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutGiftsInput
    connect?: ordersWhereUniqueInput
  }

  export type usersUpdateOneWithoutGifts_gifts_gift_receiver_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutGifts_gifts_gift_receiver_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_receiver_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutGifts_gifts_gift_receiver_idTousersInput
    upsert?: usersUpsertWithoutGifts_gifts_gift_receiver_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGifts_gifts_gift_receiver_idTousersInput, usersUpdateWithoutGifts_gifts_gift_receiver_idTousersInput>, usersUncheckedUpdateWithoutGifts_gifts_gift_receiver_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutGifts_gifts_gift_sender_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutGifts_gifts_gift_sender_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_sender_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutGifts_gifts_gift_sender_idTousersInput
    upsert?: usersUpsertWithoutGifts_gifts_gift_sender_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGifts_gifts_gift_sender_idTousersInput, usersUpdateWithoutGifts_gifts_gift_sender_idTousersInput>, usersUncheckedUpdateWithoutGifts_gifts_gift_sender_idTousersInput>
  }

  export type ordersUpdateOneRequiredWithoutGiftsNestedInput = {
    create?: XOR<ordersCreateWithoutGiftsInput, ordersUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutGiftsInput
    upsert?: ordersUpsertWithoutGiftsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutGiftsInput, ordersUpdateWithoutGiftsInput>, ordersUncheckedUpdateWithoutGiftsInput>
  }

  export type shipmentsCreateNestedManyWithoutLogistics_providersInput = {
    create?: XOR<shipmentsCreateWithoutLogistics_providersInput, shipmentsUncheckedCreateWithoutLogistics_providersInput> | shipmentsCreateWithoutLogistics_providersInput[] | shipmentsUncheckedCreateWithoutLogistics_providersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutLogistics_providersInput | shipmentsCreateOrConnectWithoutLogistics_providersInput[]
    createMany?: shipmentsCreateManyLogistics_providersInputEnvelope
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
  }

  export type shipmentsUncheckedCreateNestedManyWithoutLogistics_providersInput = {
    create?: XOR<shipmentsCreateWithoutLogistics_providersInput, shipmentsUncheckedCreateWithoutLogistics_providersInput> | shipmentsCreateWithoutLogistics_providersInput[] | shipmentsUncheckedCreateWithoutLogistics_providersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutLogistics_providersInput | shipmentsCreateOrConnectWithoutLogistics_providersInput[]
    createMany?: shipmentsCreateManyLogistics_providersInputEnvelope
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
  }

  export type shipmentsUpdateManyWithoutLogistics_providersNestedInput = {
    create?: XOR<shipmentsCreateWithoutLogistics_providersInput, shipmentsUncheckedCreateWithoutLogistics_providersInput> | shipmentsCreateWithoutLogistics_providersInput[] | shipmentsUncheckedCreateWithoutLogistics_providersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutLogistics_providersInput | shipmentsCreateOrConnectWithoutLogistics_providersInput[]
    upsert?: shipmentsUpsertWithWhereUniqueWithoutLogistics_providersInput | shipmentsUpsertWithWhereUniqueWithoutLogistics_providersInput[]
    createMany?: shipmentsCreateManyLogistics_providersInputEnvelope
    set?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    disconnect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    delete?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    update?: shipmentsUpdateWithWhereUniqueWithoutLogistics_providersInput | shipmentsUpdateWithWhereUniqueWithoutLogistics_providersInput[]
    updateMany?: shipmentsUpdateManyWithWhereWithoutLogistics_providersInput | shipmentsUpdateManyWithWhereWithoutLogistics_providersInput[]
    deleteMany?: shipmentsScalarWhereInput | shipmentsScalarWhereInput[]
  }

  export type shipmentsUncheckedUpdateManyWithoutLogistics_providersNestedInput = {
    create?: XOR<shipmentsCreateWithoutLogistics_providersInput, shipmentsUncheckedCreateWithoutLogistics_providersInput> | shipmentsCreateWithoutLogistics_providersInput[] | shipmentsUncheckedCreateWithoutLogistics_providersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutLogistics_providersInput | shipmentsCreateOrConnectWithoutLogistics_providersInput[]
    upsert?: shipmentsUpsertWithWhereUniqueWithoutLogistics_providersInput | shipmentsUpsertWithWhereUniqueWithoutLogistics_providersInput[]
    createMany?: shipmentsCreateManyLogistics_providersInputEnvelope
    set?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    disconnect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    delete?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    update?: shipmentsUpdateWithWhereUniqueWithoutLogistics_providersInput | shipmentsUpdateWithWhereUniqueWithoutLogistics_providersInput[]
    updateMany?: shipmentsUpdateManyWithWhereWithoutLogistics_providersInput | shipmentsUpdateManyWithWhereWithoutLogistics_providersInput[]
    deleteMany?: shipmentsScalarWhereInput | shipmentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutMerchantsInput = {
    create?: XOR<usersCreateWithoutMerchantsInput, usersUncheckedCreateWithoutMerchantsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMerchantsInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutMerchantsInput = {
    create?: XOR<ordersCreateWithoutMerchantsInput, ordersUncheckedCreateWithoutMerchantsInput> | ordersCreateWithoutMerchantsInput[] | ordersUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutMerchantsInput | ordersCreateOrConnectWithoutMerchantsInput[]
    createMany?: ordersCreateManyMerchantsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutMerchantsInput = {
    create?: XOR<productsCreateWithoutMerchantsInput, productsUncheckedCreateWithoutMerchantsInput> | productsCreateWithoutMerchantsInput[] | productsUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutMerchantsInput | productsCreateOrConnectWithoutMerchantsInput[]
    createMany?: productsCreateManyMerchantsInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutMerchantsInput = {
    create?: XOR<ordersCreateWithoutMerchantsInput, ordersUncheckedCreateWithoutMerchantsInput> | ordersCreateWithoutMerchantsInput[] | ordersUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutMerchantsInput | ordersCreateOrConnectWithoutMerchantsInput[]
    createMany?: ordersCreateManyMerchantsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutMerchantsInput = {
    create?: XOR<productsCreateWithoutMerchantsInput, productsUncheckedCreateWithoutMerchantsInput> | productsCreateWithoutMerchantsInput[] | productsUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutMerchantsInput | productsCreateOrConnectWithoutMerchantsInput[]
    createMany?: productsCreateManyMerchantsInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutMerchantsNestedInput = {
    create?: XOR<usersCreateWithoutMerchantsInput, usersUncheckedCreateWithoutMerchantsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMerchantsInput
    upsert?: usersUpsertWithoutMerchantsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMerchantsInput, usersUpdateWithoutMerchantsInput>, usersUncheckedUpdateWithoutMerchantsInput>
  }

  export type ordersUpdateManyWithoutMerchantsNestedInput = {
    create?: XOR<ordersCreateWithoutMerchantsInput, ordersUncheckedCreateWithoutMerchantsInput> | ordersCreateWithoutMerchantsInput[] | ordersUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutMerchantsInput | ordersCreateOrConnectWithoutMerchantsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutMerchantsInput | ordersUpsertWithWhereUniqueWithoutMerchantsInput[]
    createMany?: ordersCreateManyMerchantsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutMerchantsInput | ordersUpdateWithWhereUniqueWithoutMerchantsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutMerchantsInput | ordersUpdateManyWithWhereWithoutMerchantsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type productsUpdateManyWithoutMerchantsNestedInput = {
    create?: XOR<productsCreateWithoutMerchantsInput, productsUncheckedCreateWithoutMerchantsInput> | productsCreateWithoutMerchantsInput[] | productsUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutMerchantsInput | productsCreateOrConnectWithoutMerchantsInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutMerchantsInput | productsUpsertWithWhereUniqueWithoutMerchantsInput[]
    createMany?: productsCreateManyMerchantsInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutMerchantsInput | productsUpdateWithWhereUniqueWithoutMerchantsInput[]
    updateMany?: productsUpdateManyWithWhereWithoutMerchantsInput | productsUpdateManyWithWhereWithoutMerchantsInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutMerchantsNestedInput = {
    create?: XOR<ordersCreateWithoutMerchantsInput, ordersUncheckedCreateWithoutMerchantsInput> | ordersCreateWithoutMerchantsInput[] | ordersUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutMerchantsInput | ordersCreateOrConnectWithoutMerchantsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutMerchantsInput | ordersUpsertWithWhereUniqueWithoutMerchantsInput[]
    createMany?: ordersCreateManyMerchantsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutMerchantsInput | ordersUpdateWithWhereUniqueWithoutMerchantsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutMerchantsInput | ordersUpdateManyWithWhereWithoutMerchantsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutMerchantsNestedInput = {
    create?: XOR<productsCreateWithoutMerchantsInput, productsUncheckedCreateWithoutMerchantsInput> | productsCreateWithoutMerchantsInput[] | productsUncheckedCreateWithoutMerchantsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutMerchantsInput | productsCreateOrConnectWithoutMerchantsInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutMerchantsInput | productsUpsertWithWhereUniqueWithoutMerchantsInput[]
    createMany?: productsCreateManyMerchantsInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutMerchantsInput | productsUpdateWithWhereUniqueWithoutMerchantsInput[]
    updateMany?: productsUpdateManyWithWhereWithoutMerchantsInput | productsUpdateManyWithWhereWithoutMerchantsInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type giftsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<giftsCreateWithoutOrdersInput, giftsUncheckedCreateWithoutOrdersInput> | giftsCreateWithoutOrdersInput[] | giftsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutOrdersInput | giftsCreateOrConnectWithoutOrdersInput[]
    createMany?: giftsCreateManyOrdersInputEnvelope
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type merchantsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<merchantsCreateWithoutOrdersInput, merchantsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutOrdersInput
    connect?: merchantsWhereUniqueInput
  }

  export type paymentsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type shipmentsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<shipmentsCreateWithoutOrdersInput, shipmentsUncheckedCreateWithoutOrdersInput> | shipmentsCreateWithoutOrdersInput[] | shipmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutOrdersInput | shipmentsCreateOrConnectWithoutOrdersInput[]
    createMany?: shipmentsCreateManyOrdersInputEnvelope
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
  }

  export type giftsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<giftsCreateWithoutOrdersInput, giftsUncheckedCreateWithoutOrdersInput> | giftsCreateWithoutOrdersInput[] | giftsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutOrdersInput | giftsCreateOrConnectWithoutOrdersInput[]
    createMany?: giftsCreateManyOrdersInputEnvelope
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type shipmentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<shipmentsCreateWithoutOrdersInput, shipmentsUncheckedCreateWithoutOrdersInput> | shipmentsCreateWithoutOrdersInput[] | shipmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutOrdersInput | shipmentsCreateOrConnectWithoutOrdersInput[]
    createMany?: shipmentsCreateManyOrdersInputEnvelope
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
  }

  export type giftsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<giftsCreateWithoutOrdersInput, giftsUncheckedCreateWithoutOrdersInput> | giftsCreateWithoutOrdersInput[] | giftsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutOrdersInput | giftsCreateOrConnectWithoutOrdersInput[]
    upsert?: giftsUpsertWithWhereUniqueWithoutOrdersInput | giftsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: giftsCreateManyOrdersInputEnvelope
    set?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    disconnect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    delete?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    update?: giftsUpdateWithWhereUniqueWithoutOrdersInput | giftsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: giftsUpdateManyWithWhereWithoutOrdersInput | giftsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: giftsScalarWhereInput | giftsScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type merchantsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<merchantsCreateWithoutOrdersInput, merchantsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutOrdersInput
    upsert?: merchantsUpsertWithoutOrdersInput
    connect?: merchantsWhereUniqueInput
    update?: XOR<XOR<merchantsUpdateToOneWithWhereWithoutOrdersInput, merchantsUpdateWithoutOrdersInput>, merchantsUncheckedUpdateWithoutOrdersInput>
  }

  export type paymentsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutOrdersInput | paymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutOrdersInput | paymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutOrdersInput | paymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type shipmentsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<shipmentsCreateWithoutOrdersInput, shipmentsUncheckedCreateWithoutOrdersInput> | shipmentsCreateWithoutOrdersInput[] | shipmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutOrdersInput | shipmentsCreateOrConnectWithoutOrdersInput[]
    upsert?: shipmentsUpsertWithWhereUniqueWithoutOrdersInput | shipmentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: shipmentsCreateManyOrdersInputEnvelope
    set?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    disconnect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    delete?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    update?: shipmentsUpdateWithWhereUniqueWithoutOrdersInput | shipmentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: shipmentsUpdateManyWithWhereWithoutOrdersInput | shipmentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: shipmentsScalarWhereInput | shipmentsScalarWhereInput[]
  }

  export type giftsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<giftsCreateWithoutOrdersInput, giftsUncheckedCreateWithoutOrdersInput> | giftsCreateWithoutOrdersInput[] | giftsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutOrdersInput | giftsCreateOrConnectWithoutOrdersInput[]
    upsert?: giftsUpsertWithWhereUniqueWithoutOrdersInput | giftsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: giftsCreateManyOrdersInputEnvelope
    set?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    disconnect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    delete?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    update?: giftsUpdateWithWhereUniqueWithoutOrdersInput | giftsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: giftsUpdateManyWithWhereWithoutOrdersInput | giftsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: giftsScalarWhereInput | giftsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutOrdersInput | paymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutOrdersInput | paymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutOrdersInput | paymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type shipmentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<shipmentsCreateWithoutOrdersInput, shipmentsUncheckedCreateWithoutOrdersInput> | shipmentsCreateWithoutOrdersInput[] | shipmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: shipmentsCreateOrConnectWithoutOrdersInput | shipmentsCreateOrConnectWithoutOrdersInput[]
    upsert?: shipmentsUpsertWithWhereUniqueWithoutOrdersInput | shipmentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: shipmentsCreateManyOrdersInputEnvelope
    set?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    disconnect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    delete?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    connect?: shipmentsWhereUniqueInput | shipmentsWhereUniqueInput[]
    update?: shipmentsUpdateWithWhereUniqueWithoutOrdersInput | shipmentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: shipmentsUpdateManyWithWhereWithoutOrdersInput | shipmentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: shipmentsScalarWhereInput | shipmentsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput
    connect?: ordersWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput
    upsert?: ordersUpsertWithoutPaymentsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutPaymentsInput, ordersUpdateWithoutPaymentsInput>, ordersUncheckedUpdateWithoutPaymentsInput>
  }

  export type discountsCreateNestedManyWithoutProductsInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type merchantsCreateNestedOneWithoutProductsInput = {
    create?: XOR<merchantsCreateWithoutProductsInput, merchantsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutProductsInput
    connect?: merchantsWhereUniqueInput
  }

  export type reviewsCreateNestedManyWithoutProductsInput = {
    create?: XOR<reviewsCreateWithoutProductsInput, reviewsUncheckedCreateWithoutProductsInput> | reviewsCreateWithoutProductsInput[] | reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutProductsInput | reviewsCreateOrConnectWithoutProductsInput[]
    createMany?: reviewsCreateManyProductsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type discountsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<reviewsCreateWithoutProductsInput, reviewsUncheckedCreateWithoutProductsInput> | reviewsCreateWithoutProductsInput[] | reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutProductsInput | reviewsCreateOrConnectWithoutProductsInput[]
    createMany?: reviewsCreateManyProductsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type discountsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    upsert?: discountsUpsertWithWhereUniqueWithoutProductsInput | discountsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    set?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    disconnect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    delete?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    update?: discountsUpdateWithWhereUniqueWithoutProductsInput | discountsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: discountsUpdateManyWithWhereWithoutProductsInput | discountsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: discountsScalarWhereInput | discountsScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type merchantsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<merchantsCreateWithoutProductsInput, merchantsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutProductsInput
    upsert?: merchantsUpsertWithoutProductsInput
    connect?: merchantsWhereUniqueInput
    update?: XOR<XOR<merchantsUpdateToOneWithWhereWithoutProductsInput, merchantsUpdateWithoutProductsInput>, merchantsUncheckedUpdateWithoutProductsInput>
  }

  export type reviewsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<reviewsCreateWithoutProductsInput, reviewsUncheckedCreateWithoutProductsInput> | reviewsCreateWithoutProductsInput[] | reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutProductsInput | reviewsCreateOrConnectWithoutProductsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutProductsInput | reviewsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: reviewsCreateManyProductsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutProductsInput | reviewsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutProductsInput | reviewsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type discountsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    upsert?: discountsUpsertWithWhereUniqueWithoutProductsInput | discountsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    set?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    disconnect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    delete?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    update?: discountsUpdateWithWhereUniqueWithoutProductsInput | discountsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: discountsUpdateManyWithWhereWithoutProductsInput | discountsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: discountsScalarWhereInput | discountsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<reviewsCreateWithoutProductsInput, reviewsUncheckedCreateWithoutProductsInput> | reviewsCreateWithoutProductsInput[] | reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutProductsInput | reviewsCreateOrConnectWithoutProductsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutProductsInput | reviewsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: reviewsCreateManyProductsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutProductsInput | reviewsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutProductsInput | reviewsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<productsCreateWithoutReviewsInput, productsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: productsCreateOrConnectWithoutReviewsInput
    connect?: productsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type productsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<productsCreateWithoutReviewsInput, productsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: productsCreateOrConnectWithoutReviewsInput
    upsert?: productsUpsertWithoutReviewsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutReviewsInput, productsUpdateWithoutReviewsInput>, productsUncheckedUpdateWithoutReviewsInput>
  }

  export type ordersCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<ordersCreateWithoutShipmentsInput, ordersUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutShipmentsInput
    connect?: ordersWhereUniqueInput
  }

  export type logistics_providersCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<logistics_providersCreateWithoutShipmentsInput, logistics_providersUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: logistics_providersCreateOrConnectWithoutShipmentsInput
    connect?: logistics_providersWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<ordersCreateWithoutShipmentsInput, ordersUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutShipmentsInput
    upsert?: ordersUpsertWithoutShipmentsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutShipmentsInput, ordersUpdateWithoutShipmentsInput>, ordersUncheckedUpdateWithoutShipmentsInput>
  }

  export type logistics_providersUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<logistics_providersCreateWithoutShipmentsInput, logistics_providersUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: logistics_providersCreateOrConnectWithoutShipmentsInput
    upsert?: logistics_providersUpsertWithoutShipmentsInput
    connect?: logistics_providersWhereUniqueInput
    update?: XOR<XOR<logistics_providersUpdateToOneWithWhereWithoutShipmentsInput, logistics_providersUpdateWithoutShipmentsInput>, logistics_providersUncheckedUpdateWithoutShipmentsInput>
  }

  export type giftsCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_receiver_idTousersInputEnvelope
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
  }

  export type giftsCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_sender_idTousersInputEnvelope
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
  }

  export type merchantsCreateNestedOneWithoutUsersInput = {
    create?: XOR<merchantsCreateWithoutUsersInput, merchantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutUsersInput
    connect?: merchantsWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_receiver_idTousersInputEnvelope
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
  }

  export type giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_sender_idTousersInputEnvelope
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
  }

  export type merchantsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<merchantsCreateWithoutUsersInput, merchantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutUsersInput
    connect?: merchantsWhereUniqueInput
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type giftsUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput[]
    upsert?: giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput | giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_receiver_idTousersInputEnvelope
    set?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    disconnect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    delete?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    update?: giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput | giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput[]
    updateMany?: giftsUpdateManyWithWhereWithoutUsers_gifts_gift_receiver_idTousersInput | giftsUpdateManyWithWhereWithoutUsers_gifts_gift_receiver_idTousersInput[]
    deleteMany?: giftsScalarWhereInput | giftsScalarWhereInput[]
  }

  export type giftsUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput[]
    upsert?: giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput | giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_sender_idTousersInputEnvelope
    set?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    disconnect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    delete?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    update?: giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput | giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput[]
    updateMany?: giftsUpdateManyWithWhereWithoutUsers_gifts_gift_sender_idTousersInput | giftsUpdateManyWithWhereWithoutUsers_gifts_gift_sender_idTousersInput[]
    deleteMany?: giftsScalarWhereInput | giftsScalarWhereInput[]
  }

  export type merchantsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<merchantsCreateWithoutUsersInput, merchantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutUsersInput
    upsert?: merchantsUpsertWithoutUsersInput
    disconnect?: merchantsWhereInput | boolean
    delete?: merchantsWhereInput | boolean
    connect?: merchantsWhereUniqueInput
    update?: XOR<XOR<merchantsUpdateToOneWithWhereWithoutUsersInput, merchantsUpdateWithoutUsersInput>, merchantsUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput[]
    upsert?: giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput | giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_receiver_idTousersInputEnvelope
    set?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    disconnect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    delete?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    update?: giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput | giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput[]
    updateMany?: giftsUpdateManyWithWhereWithoutUsers_gifts_gift_receiver_idTousersInput | giftsUpdateManyWithWhereWithoutUsers_gifts_gift_receiver_idTousersInput[]
    deleteMany?: giftsScalarWhereInput | giftsScalarWhereInput[]
  }

  export type giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput = {
    create?: XOR<giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput> | giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput[] | giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput[]
    connectOrCreate?: giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput | giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput[]
    upsert?: giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput | giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput[]
    createMany?: giftsCreateManyUsers_gifts_gift_sender_idTousersInputEnvelope
    set?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    disconnect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    delete?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    connect?: giftsWhereUniqueInput | giftsWhereUniqueInput[]
    update?: giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput | giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput[]
    updateMany?: giftsUpdateManyWithWhereWithoutUsers_gifts_gift_sender_idTousersInput | giftsUpdateManyWithWhereWithoutUsers_gifts_gift_sender_idTousersInput[]
    deleteMany?: giftsScalarWhereInput | giftsScalarWhereInput[]
  }

  export type merchantsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<merchantsCreateWithoutUsersInput, merchantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: merchantsCreateOrConnectWithoutUsersInput
    upsert?: merchantsUpsertWithoutUsersInput
    disconnect?: merchantsWhereInput | boolean
    delete?: merchantsWhereInput | boolean
    connect?: merchantsWhereUniqueInput
    update?: XOR<XOR<merchantsUpdateToOneWithWhereWithoutUsersInput, merchantsUpdateWithoutUsersInput>, merchantsUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type categoriesCreateWithoutOther_categoriesInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutOther_categoriesInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    parent_category_id?: bigint | number | null
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutOther_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
  }

  export type categoriesCreateWithoutCategoriesInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string | null
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutCategoriesInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type categoriesCreateManyCategoriesInputEnvelope = {
    data: categoriesCreateManyCategoriesInput | categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutCategoriesInput = {
    product_id?: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    merchants: merchantsCreateNestedOneWithoutProductsInput
    reviews?: reviewsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutOther_categoriesInput = {
    update: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutOther_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>
  }

  export type categoriesUpdateWithoutOther_categoriesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutOther_categoriesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    category_id?: BigIntFilter<"categories"> | bigint | number
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    parent_category_id?: BigIntNullableFilter<"categories"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    product_id?: BigIntFilter<"products"> | bigint | number
    merchant_id?: BigIntFilter<"products"> | bigint | number
    category_id?: BigIntFilter<"products"> | bigint | number
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFilter<"products"> | number
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
  }

  export type productsCreateWithoutDiscountsInput = {
    product_id?: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    merchants: merchantsCreateNestedOneWithoutProductsInput
    reviews?: reviewsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutDiscountsInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutDiscountsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
  }

  export type productsUpsertWithoutDiscountsInput = {
    update: XOR<productsUpdateWithoutDiscountsInput, productsUncheckedUpdateWithoutDiscountsInput>
    create: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutDiscountsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutDiscountsInput, productsUncheckedUpdateWithoutDiscountsInput>
  }

  export type productsUpdateWithoutDiscountsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutProductsNestedInput
    reviews?: reviewsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutDiscountsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type usersCreateWithoutGifts_gifts_gift_receiver_idTousersInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_sender_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGifts_gifts_gift_receiver_idTousersInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsUncheckedCreateNestedOneWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGifts_gifts_gift_receiver_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGifts_gifts_gift_receiver_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_receiver_idTousersInput>
  }

  export type usersCreateWithoutGifts_gifts_gift_sender_idTousersInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    merchants?: merchantsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGifts_gifts_gift_sender_idTousersInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    merchants?: merchantsUncheckedCreateNestedOneWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGifts_gifts_gift_sender_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGifts_gifts_gift_sender_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_sender_idTousersInput>
  }

  export type ordersCreateWithoutGiftsInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    merchants: merchantsCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutGiftsInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutGiftsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutGiftsInput, ordersUncheckedCreateWithoutGiftsInput>
  }

  export type usersUpsertWithoutGifts_gifts_gift_receiver_idTousersInput = {
    update: XOR<usersUpdateWithoutGifts_gifts_gift_receiver_idTousersInput, usersUncheckedUpdateWithoutGifts_gifts_gift_receiver_idTousersInput>
    create: XOR<usersCreateWithoutGifts_gifts_gift_receiver_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_receiver_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGifts_gifts_gift_receiver_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGifts_gifts_gift_receiver_idTousersInput, usersUncheckedUpdateWithoutGifts_gifts_gift_receiver_idTousersInput>
  }

  export type usersUpdateWithoutGifts_gifts_gift_receiver_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_sender_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUpdateOneWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGifts_gifts_gift_receiver_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUncheckedUpdateOneWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutGifts_gifts_gift_sender_idTousersInput = {
    update: XOR<usersUpdateWithoutGifts_gifts_gift_sender_idTousersInput, usersUncheckedUpdateWithoutGifts_gifts_gift_sender_idTousersInput>
    create: XOR<usersCreateWithoutGifts_gifts_gift_sender_idTousersInput, usersUncheckedCreateWithoutGifts_gifts_gift_sender_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGifts_gifts_gift_sender_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGifts_gifts_gift_sender_idTousersInput, usersUncheckedUpdateWithoutGifts_gifts_gift_sender_idTousersInput>
  }

  export type usersUpdateWithoutGifts_gifts_gift_sender_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    merchants?: merchantsUpdateOneWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGifts_gifts_gift_sender_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    merchants?: merchantsUncheckedUpdateOneWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersUpsertWithoutGiftsInput = {
    update: XOR<ordersUpdateWithoutGiftsInput, ordersUncheckedUpdateWithoutGiftsInput>
    create: XOR<ordersCreateWithoutGiftsInput, ordersUncheckedCreateWithoutGiftsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutGiftsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutGiftsInput, ordersUncheckedUpdateWithoutGiftsInput>
  }

  export type ordersUpdateWithoutGiftsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutGiftsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type shipmentsCreateWithoutLogistics_providersInput = {
    shipment_id?: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateWithoutLogistics_providersInput = {
    shipment_id?: bigint | number
    order_id: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type shipmentsCreateOrConnectWithoutLogistics_providersInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutLogistics_providersInput, shipmentsUncheckedCreateWithoutLogistics_providersInput>
  }

  export type shipmentsCreateManyLogistics_providersInputEnvelope = {
    data: shipmentsCreateManyLogistics_providersInput | shipmentsCreateManyLogistics_providersInput[]
    skipDuplicates?: boolean
  }

  export type shipmentsUpsertWithWhereUniqueWithoutLogistics_providersInput = {
    where: shipmentsWhereUniqueInput
    update: XOR<shipmentsUpdateWithoutLogistics_providersInput, shipmentsUncheckedUpdateWithoutLogistics_providersInput>
    create: XOR<shipmentsCreateWithoutLogistics_providersInput, shipmentsUncheckedCreateWithoutLogistics_providersInput>
  }

  export type shipmentsUpdateWithWhereUniqueWithoutLogistics_providersInput = {
    where: shipmentsWhereUniqueInput
    data: XOR<shipmentsUpdateWithoutLogistics_providersInput, shipmentsUncheckedUpdateWithoutLogistics_providersInput>
  }

  export type shipmentsUpdateManyWithWhereWithoutLogistics_providersInput = {
    where: shipmentsScalarWhereInput
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyWithoutLogistics_providersInput>
  }

  export type shipmentsScalarWhereInput = {
    AND?: shipmentsScalarWhereInput | shipmentsScalarWhereInput[]
    OR?: shipmentsScalarWhereInput[]
    NOT?: shipmentsScalarWhereInput | shipmentsScalarWhereInput[]
    shipment_id?: BigIntFilter<"shipments"> | bigint | number
    order_id?: BigIntFilter<"shipments"> | bigint | number
    provider_id?: BigIntFilter<"shipments"> | bigint | number
    tracking_number?: StringNullableFilter<"shipments"> | string | null
    estimated_delivery_date?: DateTimeNullableFilter<"shipments"> | Date | string | null
    actual_delivery_date?: DateTimeNullableFilter<"shipments"> | Date | string | null
    shipment_status?: StringFilter<"shipments"> | string
    created_at?: DateTimeNullableFilter<"shipments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"shipments"> | Date | string | null
  }

  export type usersCreateWithoutMerchantsInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMerchantsInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMerchantsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMerchantsInput, usersUncheckedCreateWithoutMerchantsInput>
  }

  export type ordersCreateWithoutMerchantsInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutMerchantsInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutMerchantsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutMerchantsInput, ordersUncheckedCreateWithoutMerchantsInput>
  }

  export type ordersCreateManyMerchantsInputEnvelope = {
    data: ordersCreateManyMerchantsInput | ordersCreateManyMerchantsInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutMerchantsInput = {
    product_id?: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    reviews?: reviewsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutMerchantsInput = {
    product_id?: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutMerchantsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutMerchantsInput, productsUncheckedCreateWithoutMerchantsInput>
  }

  export type productsCreateManyMerchantsInputEnvelope = {
    data: productsCreateManyMerchantsInput | productsCreateManyMerchantsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutMerchantsInput = {
    update: XOR<usersUpdateWithoutMerchantsInput, usersUncheckedUpdateWithoutMerchantsInput>
    create: XOR<usersCreateWithoutMerchantsInput, usersUncheckedCreateWithoutMerchantsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMerchantsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMerchantsInput, usersUncheckedUpdateWithoutMerchantsInput>
  }

  export type usersUpdateWithoutMerchantsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMerchantsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersUpsertWithWhereUniqueWithoutMerchantsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutMerchantsInput, ordersUncheckedUpdateWithoutMerchantsInput>
    create: XOR<ordersCreateWithoutMerchantsInput, ordersUncheckedCreateWithoutMerchantsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutMerchantsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutMerchantsInput, ordersUncheckedUpdateWithoutMerchantsInput>
  }

  export type ordersUpdateManyWithWhereWithoutMerchantsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutMerchantsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    order_id?: BigIntFilter<"orders"> | bigint | number
    customer_id?: BigIntFilter<"orders"> | bigint | number
    merchant_id?: BigIntFilter<"orders"> | bigint | number
    order_status?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFilter<"orders"> | string
    delivery_type?: StringFilter<"orders"> | string
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type productsUpsertWithWhereUniqueWithoutMerchantsInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutMerchantsInput, productsUncheckedUpdateWithoutMerchantsInput>
    create: XOR<productsCreateWithoutMerchantsInput, productsUncheckedCreateWithoutMerchantsInput>
  }

  export type productsUpdateWithWhereUniqueWithoutMerchantsInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutMerchantsInput, productsUncheckedUpdateWithoutMerchantsInput>
  }

  export type productsUpdateManyWithWhereWithoutMerchantsInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutMerchantsInput>
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    merchants: merchantsCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    product_id?: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    merchants: merchantsCreateNestedOneWithoutProductsInput
    reviews?: reviewsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutProductsNestedInput
    reviews?: reviewsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type giftsCreateWithoutOrdersInput = {
    gift_id?: bigint | number
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    created_at?: Date | string | null
    users_gifts_gift_receiver_idTousers?: usersCreateNestedOneWithoutGifts_gifts_gift_receiver_idTousersInput
    users_gifts_gift_sender_idTousers: usersCreateNestedOneWithoutGifts_gifts_gift_sender_idTousersInput
  }

  export type giftsUncheckedCreateWithoutOrdersInput = {
    gift_id?: bigint | number
    gift_sender_id: bigint | number
    gift_receiver_id?: bigint | number | null
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    created_at?: Date | string | null
  }

  export type giftsCreateOrConnectWithoutOrdersInput = {
    where: giftsWhereUniqueInput
    create: XOR<giftsCreateWithoutOrdersInput, giftsUncheckedCreateWithoutOrdersInput>
  }

  export type giftsCreateManyOrdersInputEnvelope = {
    data: giftsCreateManyOrdersInput | giftsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutOrdersInput = {
    order_item_id?: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    order_item_id?: bigint | number
    product_id: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrdersInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsCreateNestedOneWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsUncheckedCreateNestedOneWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type merchantsCreateWithoutOrdersInput = {
    merchant_id?: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutMerchantsInput
    products?: productsCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsUncheckedCreateWithoutOrdersInput = {
    merchant_id?: bigint | number
    user_id: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsCreateOrConnectWithoutOrdersInput = {
    where: merchantsWhereUniqueInput
    create: XOR<merchantsCreateWithoutOrdersInput, merchantsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsCreateWithoutOrdersInput = {
    payment_id?: bigint | number
    transaction_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsUncheckedCreateWithoutOrdersInput = {
    payment_id?: bigint | number
    transaction_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsCreateOrConnectWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsCreateManyOrdersInputEnvelope = {
    data: paymentsCreateManyOrdersInput | paymentsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type shipmentsCreateWithoutOrdersInput = {
    shipment_id?: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    logistics_providers: logistics_providersCreateNestedOneWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateWithoutOrdersInput = {
    shipment_id?: bigint | number
    provider_id: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type shipmentsCreateOrConnectWithoutOrdersInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutOrdersInput, shipmentsUncheckedCreateWithoutOrdersInput>
  }

  export type shipmentsCreateManyOrdersInputEnvelope = {
    data: shipmentsCreateManyOrdersInput | shipmentsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type giftsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: giftsWhereUniqueInput
    update: XOR<giftsUpdateWithoutOrdersInput, giftsUncheckedUpdateWithoutOrdersInput>
    create: XOR<giftsCreateWithoutOrdersInput, giftsUncheckedCreateWithoutOrdersInput>
  }

  export type giftsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: giftsWhereUniqueInput
    data: XOR<giftsUpdateWithoutOrdersInput, giftsUncheckedUpdateWithoutOrdersInput>
  }

  export type giftsUpdateManyWithWhereWithoutOrdersInput = {
    where: giftsScalarWhereInput
    data: XOR<giftsUpdateManyMutationInput, giftsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type giftsScalarWhereInput = {
    AND?: giftsScalarWhereInput | giftsScalarWhereInput[]
    OR?: giftsScalarWhereInput[]
    NOT?: giftsScalarWhereInput | giftsScalarWhereInput[]
    gift_id?: BigIntFilter<"gifts"> | bigint | number
    gift_sender_id?: BigIntFilter<"gifts"> | bigint | number
    gift_receiver_id?: BigIntNullableFilter<"gifts"> | bigint | number | null
    receiver_phone?: StringNullableFilter<"gifts"> | string | null
    receiver_email?: StringNullableFilter<"gifts"> | string | null
    receiver_address?: StringFilter<"gifts"> | string
    message?: StringNullableFilter<"gifts"> | string | null
    order_id?: BigIntFilter<"gifts"> | bigint | number
    created_at?: DateTimeNullableFilter<"gifts"> | Date | string | null
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    order_item_id?: BigIntFilter<"order_items"> | bigint | number
    order_id?: BigIntFilter<"order_items"> | bigint | number
    product_id?: BigIntFilter<"order_items"> | bigint | number
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_items"> | Date | string | null
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUpdateOneWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUncheckedUpdateOneWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type merchantsUpsertWithoutOrdersInput = {
    update: XOR<merchantsUpdateWithoutOrdersInput, merchantsUncheckedUpdateWithoutOrdersInput>
    create: XOR<merchantsCreateWithoutOrdersInput, merchantsUncheckedCreateWithoutOrdersInput>
    where?: merchantsWhereInput
  }

  export type merchantsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: merchantsWhereInput
    data: XOR<merchantsUpdateWithoutOrdersInput, merchantsUncheckedUpdateWithoutOrdersInput>
  }

  export type merchantsUpdateWithoutOrdersInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMerchantsNestedInput
    products?: productsUpdateManyWithoutMerchantsNestedInput
  }

  export type merchantsUncheckedUpdateWithoutOrdersInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutMerchantsNestedInput
  }

  export type paymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutOrdersInput, paymentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutOrdersInput, paymentsUncheckedUpdateWithoutOrdersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    payment_id?: BigIntFilter<"payments"> | bigint | number
    order_id?: BigIntFilter<"payments"> | bigint | number
    transaction_id?: StringFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringFilter<"payments"> | string
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
  }

  export type shipmentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: shipmentsWhereUniqueInput
    update: XOR<shipmentsUpdateWithoutOrdersInput, shipmentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<shipmentsCreateWithoutOrdersInput, shipmentsUncheckedCreateWithoutOrdersInput>
  }

  export type shipmentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: shipmentsWhereUniqueInput
    data: XOR<shipmentsUpdateWithoutOrdersInput, shipmentsUncheckedUpdateWithoutOrdersInput>
  }

  export type shipmentsUpdateManyWithWhereWithoutOrdersInput = {
    where: shipmentsScalarWhereInput
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type ordersCreateWithoutPaymentsInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    merchants: merchantsCreateNestedOneWithoutOrdersInput
    shipments?: shipmentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutPaymentsInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutPaymentsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
  }

  export type ordersUpsertWithoutPaymentsInput = {
    update: XOR<ordersUpdateWithoutPaymentsInput, ordersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutPaymentsInput, ordersUncheckedUpdateWithoutPaymentsInput>
  }

  export type ordersUpdateWithoutPaymentsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutOrdersNestedInput
    shipments?: shipmentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutPaymentsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type discountsCreateWithoutProductsInput = {
    discount_id?: bigint | number
    discount_percentage: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string | null
  }

  export type discountsUncheckedCreateWithoutProductsInput = {
    discount_id?: bigint | number
    discount_percentage: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string | null
  }

  export type discountsCreateOrConnectWithoutProductsInput = {
    where: discountsWhereUniqueInput
    create: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput>
  }

  export type discountsCreateManyProductsInputEnvelope = {
    data: discountsCreateManyProductsInput | discountsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProductsInput = {
    order_item_id?: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    order_item_id?: bigint | number
    order_id: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    parent_category_id?: bigint | number | null
    created_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type merchantsCreateWithoutProductsInput = {
    merchant_id?: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutMerchantsInput
    orders?: ordersCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsUncheckedCreateWithoutProductsInput = {
    merchant_id?: bigint | number
    user_id: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsCreateOrConnectWithoutProductsInput = {
    where: merchantsWhereUniqueInput
    create: XOR<merchantsCreateWithoutProductsInput, merchantsUncheckedCreateWithoutProductsInput>
  }

  export type reviewsCreateWithoutProductsInput = {
    review_id?: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutProductsInput = {
    review_id?: bigint | number
    customer_id: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutProductsInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutProductsInput, reviewsUncheckedCreateWithoutProductsInput>
  }

  export type reviewsCreateManyProductsInputEnvelope = {
    data: reviewsCreateManyProductsInput | reviewsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type discountsUpsertWithWhereUniqueWithoutProductsInput = {
    where: discountsWhereUniqueInput
    update: XOR<discountsUpdateWithoutProductsInput, discountsUncheckedUpdateWithoutProductsInput>
    create: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput>
  }

  export type discountsUpdateWithWhereUniqueWithoutProductsInput = {
    where: discountsWhereUniqueInput
    data: XOR<discountsUpdateWithoutProductsInput, discountsUncheckedUpdateWithoutProductsInput>
  }

  export type discountsUpdateManyWithWhereWithoutProductsInput = {
    where: discountsScalarWhereInput
    data: XOR<discountsUpdateManyMutationInput, discountsUncheckedUpdateManyWithoutProductsInput>
  }

  export type discountsScalarWhereInput = {
    AND?: discountsScalarWhereInput | discountsScalarWhereInput[]
    OR?: discountsScalarWhereInput[]
    NOT?: discountsScalarWhereInput | discountsScalarWhereInput[]
    discount_id?: BigIntFilter<"discounts"> | bigint | number
    product_id?: BigIntFilter<"discounts"> | bigint | number
    discount_percentage?: DecimalFilter<"discounts"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"discounts"> | Date | string
    end_date?: DateTimeFilter<"discounts"> | Date | string
    created_at?: DateTimeNullableFilter<"discounts"> | Date | string | null
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type merchantsUpsertWithoutProductsInput = {
    update: XOR<merchantsUpdateWithoutProductsInput, merchantsUncheckedUpdateWithoutProductsInput>
    create: XOR<merchantsCreateWithoutProductsInput, merchantsUncheckedCreateWithoutProductsInput>
    where?: merchantsWhereInput
  }

  export type merchantsUpdateToOneWithWhereWithoutProductsInput = {
    where?: merchantsWhereInput
    data: XOR<merchantsUpdateWithoutProductsInput, merchantsUncheckedUpdateWithoutProductsInput>
  }

  export type merchantsUpdateWithoutProductsInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMerchantsNestedInput
    orders?: ordersUpdateManyWithoutMerchantsNestedInput
  }

  export type merchantsUncheckedUpdateWithoutProductsInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutMerchantsNestedInput
  }

  export type reviewsUpsertWithWhereUniqueWithoutProductsInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutProductsInput, reviewsUncheckedUpdateWithoutProductsInput>
    create: XOR<reviewsCreateWithoutProductsInput, reviewsUncheckedCreateWithoutProductsInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutProductsInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutProductsInput, reviewsUncheckedUpdateWithoutProductsInput>
  }

  export type reviewsUpdateManyWithWhereWithoutProductsInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutProductsInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    review_id?: BigIntFilter<"reviews"> | bigint | number
    product_id?: BigIntFilter<"reviews"> | bigint | number
    customer_id?: BigIntFilter<"reviews"> | bigint | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
  }

  export type usersCreateWithoutReviewsInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    user_id?: bigint | number
    user_type: string
    first_name: string
    last_name: string
    email?: string | null
    phone_number: string
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_receiver_idTousersInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedCreateNestedManyWithoutUsers_gifts_gift_sender_idTousersInput
    merchants?: merchantsUncheckedCreateNestedOneWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type productsCreateWithoutReviewsInput = {
    product_id?: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    merchants: merchantsCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutReviewsInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutReviewsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutReviewsInput, productsUncheckedCreateWithoutReviewsInput>
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUpdateOneWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts_gifts_gift_receiver_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersNestedInput
    gifts_gifts_gift_sender_idTousers?: giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersNestedInput
    merchants?: merchantsUncheckedUpdateOneWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsUpsertWithoutReviewsInput = {
    update: XOR<productsUpdateWithoutReviewsInput, productsUncheckedUpdateWithoutReviewsInput>
    create: XOR<productsCreateWithoutReviewsInput, productsUncheckedCreateWithoutReviewsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutReviewsInput, productsUncheckedUpdateWithoutReviewsInput>
  }

  export type productsUpdateWithoutReviewsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutReviewsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ordersCreateWithoutShipmentsInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    merchants: merchantsCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutShipmentsInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutShipmentsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutShipmentsInput, ordersUncheckedCreateWithoutShipmentsInput>
  }

  export type logistics_providersCreateWithoutShipmentsInput = {
    provider_id?: bigint | number
    name: string
    contact_phone: string
    contact_email?: string | null
    created_at?: Date | string | null
  }

  export type logistics_providersUncheckedCreateWithoutShipmentsInput = {
    provider_id?: bigint | number
    name: string
    contact_phone: string
    contact_email?: string | null
    created_at?: Date | string | null
  }

  export type logistics_providersCreateOrConnectWithoutShipmentsInput = {
    where: logistics_providersWhereUniqueInput
    create: XOR<logistics_providersCreateWithoutShipmentsInput, logistics_providersUncheckedCreateWithoutShipmentsInput>
  }

  export type ordersUpsertWithoutShipmentsInput = {
    update: XOR<ordersUpdateWithoutShipmentsInput, ordersUncheckedUpdateWithoutShipmentsInput>
    create: XOR<ordersCreateWithoutShipmentsInput, ordersUncheckedCreateWithoutShipmentsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutShipmentsInput, ordersUncheckedUpdateWithoutShipmentsInput>
  }

  export type ordersUpdateWithoutShipmentsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutShipmentsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type logistics_providersUpsertWithoutShipmentsInput = {
    update: XOR<logistics_providersUpdateWithoutShipmentsInput, logistics_providersUncheckedUpdateWithoutShipmentsInput>
    create: XOR<logistics_providersCreateWithoutShipmentsInput, logistics_providersUncheckedCreateWithoutShipmentsInput>
    where?: logistics_providersWhereInput
  }

  export type logistics_providersUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: logistics_providersWhereInput
    data: XOR<logistics_providersUpdateWithoutShipmentsInput, logistics_providersUncheckedUpdateWithoutShipmentsInput>
  }

  export type logistics_providersUpdateWithoutShipmentsInput = {
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logistics_providersUncheckedUpdateWithoutShipmentsInput = {
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput = {
    gift_id?: bigint | number
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    created_at?: Date | string | null
    users_gifts_gift_sender_idTousers: usersCreateNestedOneWithoutGifts_gifts_gift_sender_idTousersInput
    orders: ordersCreateNestedOneWithoutGiftsInput
  }

  export type giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput = {
    gift_id?: bigint | number
    gift_sender_id: bigint | number
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    order_id: bigint | number
    created_at?: Date | string | null
  }

  export type giftsCreateOrConnectWithoutUsers_gifts_gift_receiver_idTousersInput = {
    where: giftsWhereUniqueInput
    create: XOR<giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput>
  }

  export type giftsCreateManyUsers_gifts_gift_receiver_idTousersInputEnvelope = {
    data: giftsCreateManyUsers_gifts_gift_receiver_idTousersInput | giftsCreateManyUsers_gifts_gift_receiver_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput = {
    gift_id?: bigint | number
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    created_at?: Date | string | null
    users_gifts_gift_receiver_idTousers?: usersCreateNestedOneWithoutGifts_gifts_gift_receiver_idTousersInput
    orders: ordersCreateNestedOneWithoutGiftsInput
  }

  export type giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput = {
    gift_id?: bigint | number
    gift_receiver_id?: bigint | number | null
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    order_id: bigint | number
    created_at?: Date | string | null
  }

  export type giftsCreateOrConnectWithoutUsers_gifts_gift_sender_idTousersInput = {
    where: giftsWhereUniqueInput
    create: XOR<giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput>
  }

  export type giftsCreateManyUsers_gifts_gift_sender_idTousersInputEnvelope = {
    data: giftsCreateManyUsers_gifts_gift_sender_idTousersInput | giftsCreateManyUsers_gifts_gift_sender_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type merchantsCreateWithoutUsersInput = {
    merchant_id?: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutMerchantsInput
    products?: productsCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsUncheckedCreateWithoutUsersInput = {
    merchant_id?: bigint | number
    business_name: string
    business_license?: string | null
    store_description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutMerchantsInput
    products?: productsUncheckedCreateNestedManyWithoutMerchantsInput
  }

  export type merchantsCreateOrConnectWithoutUsersInput = {
    where: merchantsWhereUniqueInput
    create: XOR<merchantsCreateWithoutUsersInput, merchantsUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateWithoutUsersInput = {
    order_id?: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    merchants: merchantsCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    order_id?: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gifts?: giftsUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
    shipments?: shipmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUsersInput = {
    review_id?: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUsersInput = {
    review_id?: bigint | number
    product_id: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsCreateManyUsersInputEnvelope = {
    data: reviewsCreateManyUsersInput | reviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput = {
    where: giftsWhereUniqueInput
    update: XOR<giftsUpdateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedUpdateWithoutUsers_gifts_gift_receiver_idTousersInput>
    create: XOR<giftsCreateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_receiver_idTousersInput>
  }

  export type giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_receiver_idTousersInput = {
    where: giftsWhereUniqueInput
    data: XOR<giftsUpdateWithoutUsers_gifts_gift_receiver_idTousersInput, giftsUncheckedUpdateWithoutUsers_gifts_gift_receiver_idTousersInput>
  }

  export type giftsUpdateManyWithWhereWithoutUsers_gifts_gift_receiver_idTousersInput = {
    where: giftsScalarWhereInput
    data: XOR<giftsUpdateManyMutationInput, giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersInput>
  }

  export type giftsUpsertWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput = {
    where: giftsWhereUniqueInput
    update: XOR<giftsUpdateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedUpdateWithoutUsers_gifts_gift_sender_idTousersInput>
    create: XOR<giftsCreateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedCreateWithoutUsers_gifts_gift_sender_idTousersInput>
  }

  export type giftsUpdateWithWhereUniqueWithoutUsers_gifts_gift_sender_idTousersInput = {
    where: giftsWhereUniqueInput
    data: XOR<giftsUpdateWithoutUsers_gifts_gift_sender_idTousersInput, giftsUncheckedUpdateWithoutUsers_gifts_gift_sender_idTousersInput>
  }

  export type giftsUpdateManyWithWhereWithoutUsers_gifts_gift_sender_idTousersInput = {
    where: giftsScalarWhereInput
    data: XOR<giftsUpdateManyMutationInput, giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersInput>
  }

  export type merchantsUpsertWithoutUsersInput = {
    update: XOR<merchantsUpdateWithoutUsersInput, merchantsUncheckedUpdateWithoutUsersInput>
    create: XOR<merchantsCreateWithoutUsersInput, merchantsUncheckedCreateWithoutUsersInput>
    where?: merchantsWhereInput
  }

  export type merchantsUpdateToOneWithWhereWithoutUsersInput = {
    where?: merchantsWhereInput
    data: XOR<merchantsUpdateWithoutUsersInput, merchantsUncheckedUpdateWithoutUsersInput>
  }

  export type merchantsUpdateWithoutUsersInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutMerchantsNestedInput
    products?: productsUpdateManyWithoutMerchantsNestedInput
  }

  export type merchantsUncheckedUpdateWithoutUsersInput = {
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: NullableStringFieldUpdateOperationsInput | string | null
    store_description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutMerchantsNestedInput
    products?: productsUncheckedUpdateManyWithoutMerchantsNestedInput
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type categoriesCreateManyCategoriesInput = {
    category_id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type productsCreateManyCategoriesInput = {
    product_id?: bigint | number
    merchant_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesUpdateWithoutCategoriesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutCategoriesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutProductsNestedInput
    reviews?: reviewsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsCreateManyLogistics_providersInput = {
    shipment_id?: bigint | number
    order_id: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type shipmentsUpdateWithoutLogistics_providersInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutLogistics_providersInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsUncheckedUpdateManyWithoutLogistics_providersInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyMerchantsInput = {
    order_id?: bigint | number
    customer_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productsCreateManyMerchantsInput = {
    product_id?: bigint | number
    category_id: bigint | number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock_quantity?: number
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersUpdateWithoutMerchantsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutMerchantsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutMerchantsInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutMerchantsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    reviews?: reviewsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutMerchantsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutMerchantsInput = {
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsCreateManyOrdersInput = {
    gift_id?: bigint | number
    gift_sender_id: bigint | number
    gift_receiver_id?: bigint | number | null
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    created_at?: Date | string | null
  }

  export type order_itemsCreateManyOrdersInput = {
    order_item_id?: bigint | number
    product_id: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type paymentsCreateManyOrdersInput = {
    payment_id?: bigint | number
    transaction_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type shipmentsCreateManyOrdersInput = {
    shipment_id?: bigint | number
    provider_id: bigint | number
    tracking_number?: string | null
    estimated_delivery_date?: Date | string | null
    actual_delivery_date?: Date | string | null
    shipment_status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type giftsUpdateWithoutOrdersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_gifts_gift_receiver_idTousers?: usersUpdateOneWithoutGifts_gifts_gift_receiver_idTousersNestedInput
    users_gifts_gift_sender_idTousers?: usersUpdateOneRequiredWithoutGifts_gifts_gift_sender_idTousersNestedInput
  }

  export type giftsUncheckedUpdateWithoutOrdersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_receiver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsUncheckedUpdateManyWithoutOrdersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_receiver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUpdateWithoutOrdersInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateWithoutOrdersInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutOrdersInput = {
    payment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsUpdateWithoutOrdersInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logistics_providers?: logistics_providersUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutOrdersInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shipmentsUncheckedUpdateManyWithoutOrdersInput = {
    shipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discountsCreateManyProductsInput = {
    discount_id?: bigint | number
    discount_percentage: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string | null
  }

  export type order_itemsCreateManyProductsInput = {
    order_item_id?: bigint | number
    order_id: bigint | number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type reviewsCreateManyProductsInput = {
    review_id?: bigint | number
    customer_id: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type discountsUpdateWithoutProductsInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discountsUncheckedUpdateWithoutProductsInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discountsUncheckedUpdateManyWithoutProductsInput = {
    discount_id?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUpdateWithoutProductsInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    order_item_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUpdateWithoutProductsInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutProductsInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutProductsInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsCreateManyUsers_gifts_gift_receiver_idTousersInput = {
    gift_id?: bigint | number
    gift_sender_id: bigint | number
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    order_id: bigint | number
    created_at?: Date | string | null
  }

  export type giftsCreateManyUsers_gifts_gift_sender_idTousersInput = {
    gift_id?: bigint | number
    gift_receiver_id?: bigint | number | null
    receiver_phone?: string | null
    receiver_email?: string | null
    receiver_address: string
    message?: string | null
    order_id: bigint | number
    created_at?: Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    order_id?: bigint | number
    merchant_id: bigint | number
    order_status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    delivery_type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reviewsCreateManyUsersInput = {
    review_id?: bigint | number
    product_id: bigint | number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type giftsUpdateWithoutUsers_gifts_gift_receiver_idTousersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_gifts_gift_sender_idTousers?: usersUpdateOneRequiredWithoutGifts_gifts_gift_sender_idTousersNestedInput
    orders?: ordersUpdateOneRequiredWithoutGiftsNestedInput
  }

  export type giftsUncheckedUpdateWithoutUsers_gifts_gift_receiver_idTousersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsUncheckedUpdateManyWithoutUsers_gifts_gift_receiver_idTousersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsUpdateWithoutUsers_gifts_gift_sender_idTousersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_gifts_gift_receiver_idTousers?: usersUpdateOneWithoutGifts_gifts_gift_receiver_idTousersNestedInput
    orders?: ordersUpdateOneRequiredWithoutGiftsNestedInput
  }

  export type giftsUncheckedUpdateWithoutUsers_gifts_gift_sender_idTousersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_receiver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type giftsUncheckedUpdateManyWithoutUsers_gifts_gift_sender_idTousersInput = {
    gift_id?: BigIntFieldUpdateOperationsInput | bigint | number
    gift_receiver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    receiver_phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    merchants?: merchantsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gifts?: giftsUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
    shipments?: shipmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    merchant_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    delivery_type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUpdateWithoutUsersInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUsersInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutUsersInput = {
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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