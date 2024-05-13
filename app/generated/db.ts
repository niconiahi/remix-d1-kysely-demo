import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface _CfKV {
  key: string;
  value: Buffer | null;
}

export interface D1Migrations {
  applied_at: Generated<string>;
  id: Generated<number | null>;
  name: string | null;
}

export interface User {
  id: Generated<number>;
  lastname: string;
  name: string;
  username: string | null;
}

export interface DB {
  _cf_KV: _CfKV;
  d1_migrations: D1Migrations;
  user: User;
}
