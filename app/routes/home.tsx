import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { env, waitUntil } from "cloudflare:workers";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader(_: Route.LoaderArgs) {
  let value = await env.MY_KV.get("key");

  if (!value) {
    waitUntil(env.MY_KV.put("key", "value"));
    value = "fallback";
  }

  return { value };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome value={loaderData.value} />;
}
