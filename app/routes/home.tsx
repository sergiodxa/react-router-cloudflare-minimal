import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getBindings } from "~/middleware/bindings.server";
import { getStore } from "~/middleware/store.client";

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
    await MY_KV.put("key", "value");
    value = "fallback";
  }

  return { value };
}

export async function clientLoader({
  serverLoader,
  context,
}: Route.ClientLoaderArgs) {
  let store = getStore(context);
  if (store.has("key")) return { value: store.get("key") as string };
  let serverData = await serverLoader();
  store.set("key", serverData.value);
  return serverData;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome value={loaderData.value} />;
}
