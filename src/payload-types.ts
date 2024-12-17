/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    payment_methods: PaymentMethod;
    payment_statuses: PaymentStatus;
    categories: Category;
    media: Media;
    product_embeddings: ProductEmbedding;
    image_embeddings: ImageEmbedding;
    addresses: Address;
    colors: Color;
    sizes: Size;
    product_discounts: ProductDiscount;
    order_statuses: OrderStatus;
    order_trackings: OrderTracking;
    coupons: Coupon;
    blogs: Blog;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    payment_methods: PaymentMethodsSelect<false> | PaymentMethodsSelect<true>;
    payment_statuses: PaymentStatusesSelect<false> | PaymentStatusesSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    product_embeddings: ProductEmbeddingsSelect<false> | ProductEmbeddingsSelect<true>;
    image_embeddings: ImageEmbeddingsSelect<false> | ImageEmbeddingsSelect<true>;
    addresses: AddressesSelect<false> | AddressesSelect<true>;
    colors: ColorsSelect<false> | ColorsSelect<true>;
    sizes: SizesSelect<false> | SizesSelect<true>;
    product_discounts: ProductDiscountsSelect<false> | ProductDiscountsSelect<true>;
    order_statuses: OrderStatusesSelect<false> | OrderStatusesSelect<true>;
    order_trackings: OrderTrackingsSelect<false> | OrderTrackingsSelect<true>;
    coupons: CouponsSelect<false> | CouponsSelect<true>;
    blogs: BlogsSelect<false> | BlogsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  role: 'super_admin' | 'admin' | 'user';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payment_methods".
 */
export interface PaymentMethod {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payment_statuses".
 */
export interface PaymentStatus {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  category_parent?: (number | Category)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product_embeddings".
 */
export interface ProductEmbedding {
  id: number;
  product_id: string;
  product_embedding: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image_embeddings".
 */
export interface ImageEmbedding {
  id: number;
  product_id: string;
  image_embedding: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "addresses".
 */
export interface Address {
  id: number;
  name: string;
  province?:
    | (
        | 'AG'
        | 'BR-VT'
        | 'BG'
        | 'BK'
        | 'BL'
        | 'BN'
        | 'BTR'
        | 'BDUOG'
        | 'BDINH'
        | 'BP'
        | 'BTN'
        | 'CM'
        | 'CT'
        | 'CB'
        | 'DN'
        | 'DALAT'
        | 'DNONG'
        | 'DBIEN'
        | 'DNAI'
        | 'DTHAP'
        | 'GL'
        | 'HAG'
        | 'HAN'
        | 'HN'
        | 'HT'
        | 'HD'
        | 'HP'
        | 'HGI'
        | 'HB'
        | 'HCM'
        | 'HY'
        | 'KH'
        | 'KG'
        | 'KT'
        | 'LCH'
        | 'LD'
        | 'LS'
        | 'LCA'
        | 'LA'
        | 'NAMD'
        | 'NA'
        | 'NB'
        | 'NT'
        | 'PT'
        | 'PY'
        | 'QB'
        | 'QNA'
        | 'QNg'
        | 'QNI'
        | 'QT'
        | 'ST'
        | 'SL'
        | 'TNINH'
        | 'TB'
        | 'TNG'
        | 'TH'
        | 'TTH'
        | 'TG'
        | 'TV'
        | 'TQ'
        | 'VL'
        | 'VP'
        | 'YB'
      )
    | null;
  district: string;
  ward_code: string;
  detail_address: string;
  contact_name: string;
  contact_phone: string;
  id_default?: boolean | null;
  is_deleted?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "colors".
 */
export interface Color {
  id: number;
  description?: string | null;
  name: (
    | 'red'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'orange'
    | 'purple'
    | 'pink'
    | 'black'
    | 'white'
    | 'gray'
    | 'brown'
    | 'cyan'
    | 'magenta'
    | 'lime'
    | 'teal'
    | 'indigo'
    | 'violet'
    | 'maroon'
    | 'olive'
    | 'navy'
    | 'gold'
    | 'silver'
    | 'beige'
    | 'peach'
    | 'turquoise'
    | 'mint'
    | 'lavender'
    | 'coral'
    | 'salmon'
    | 'khaki'
    | 'crimson'
    | 'azure'
    | 'amethyst'
    | 'plum'
    | 'saffron'
    | 'charcoal'
    | 'ivory'
    | 'periwinkle'
    | 'scarlet'
    | 'emerald'
    | 'rust'
    | 'tan'
    | 'burgundy'
    | 'ochre'
    | 'ruby'
    | 'onyx'
    | 'sand'
    | 'steel'
  )[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sizes".
 */
export interface Size {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product_discounts".
 */
export interface ProductDiscount {
  id: number;
  name: string;
  description?: string | null;
  start_date: string;
  end_date: string;
  discount_type: string;
  discount_value: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order_statuses".
 */
export interface OrderStatus {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order_trackings".
 */
export interface OrderTracking {
  id: number;
  begin_at?: string | null;
  end_at?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coupons".
 */
export interface Coupon {
  id: number;
  code: string;
  discount_type: string;
  total_discount: number;
  start_date?: string | null;
  end_date?: string | null;
  quantity: number;
  visible?: boolean | null;
  collected_quantity: number;
  current_use?: number | null;
  minimum_price_to_use: number;
  created_at: string;
  updated_at: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  published?: boolean | null;
  published_at?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'payment_methods';
        value: number | PaymentMethod;
      } | null)
    | ({
        relationTo: 'payment_statuses';
        value: number | PaymentStatus;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'product_embeddings';
        value: number | ProductEmbedding;
      } | null)
    | ({
        relationTo: 'image_embeddings';
        value: number | ImageEmbedding;
      } | null)
    | ({
        relationTo: 'addresses';
        value: number | Address;
      } | null)
    | ({
        relationTo: 'colors';
        value: number | Color;
      } | null)
    | ({
        relationTo: 'sizes';
        value: number | Size;
      } | null)
    | ({
        relationTo: 'product_discounts';
        value: number | ProductDiscount;
      } | null)
    | ({
        relationTo: 'order_statuses';
        value: number | OrderStatus;
      } | null)
    | ({
        relationTo: 'order_trackings';
        value: number | OrderTracking;
      } | null)
    | ({
        relationTo: 'coupons';
        value: number | Coupon;
      } | null)
    | ({
        relationTo: 'blogs';
        value: number | Blog;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payment_methods_select".
 */
export interface PaymentMethodsSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payment_statuses_select".
 */
export interface PaymentStatusesSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  created_at?: T;
  updated_at?: T;
  category_parent?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product_embeddings_select".
 */
export interface ProductEmbeddingsSelect<T extends boolean = true> {
  product_id?: T;
  product_embedding?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image_embeddings_select".
 */
export interface ImageEmbeddingsSelect<T extends boolean = true> {
  product_id?: T;
  image_embedding?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "addresses_select".
 */
export interface AddressesSelect<T extends boolean = true> {
  name?: T;
  province?: T;
  district?: T;
  ward_code?: T;
  detail_address?: T;
  contact_name?: T;
  contact_phone?: T;
  id_default?: T;
  is_deleted?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "colors_select".
 */
export interface ColorsSelect<T extends boolean = true> {
  description?: T;
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sizes_select".
 */
export interface SizesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product_discounts_select".
 */
export interface ProductDiscountsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  start_date?: T;
  end_date?: T;
  discount_type?: T;
  discount_value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order_statuses_select".
 */
export interface OrderStatusesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order_trackings_select".
 */
export interface OrderTrackingsSelect<T extends boolean = true> {
  begin_at?: T;
  end_at?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coupons_select".
 */
export interface CouponsSelect<T extends boolean = true> {
  code?: T;
  discount_type?: T;
  total_discount?: T;
  start_date?: T;
  end_date?: T;
  quantity?: T;
  visible?: T;
  collected_quantity?: T;
  current_use?: T;
  minimum_price_to_use?: T;
  created_at?: T;
  updated_at?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs_select".
 */
export interface BlogsSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  content?: T;
  published?: T;
  published_at?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}