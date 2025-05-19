import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getBindings, waitUntil } from "~/middleware/bindings.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  let { MY_KV } = getBindings(context);
  let value = await MY_KV.get("key");

  if (!value) {
    waitUntil(context, MY_KV.put("key", "value"));
    value = "fallback";
  }

  return { value };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome value={loaderData.value} />;
}
