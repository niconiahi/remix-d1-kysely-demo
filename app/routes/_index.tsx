import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getQueryBuilder } from "~/utils/query-builder";

export async function loader({ context }: LoaderFunctionArgs) {
  const queryBuilder = getQueryBuilder(context)
  await queryBuilder
    .insertInto("user")
    .values([{ lastname: "accetta", name: "nicolas", username: "niconiahi" }])
    .execute();

  const users = await queryBuilder.selectFrom("user").select("id").execute();
  return json({ users });
}

export default function() {
  const { users } = useLoaderData<typeof loader>();

  return (
    <div>
      <h4>On every render, a new user is created on the D1 database</h4>
      {users.map((user) => (
        <span key={`user-${user.id.toString()}`} style={{ display: "block" }}>
          {user.id}
        </span>
      ))}
    </div>
  );
}
