import {
  unstable_createContext,
  unstable_RouterContextProvider,
} from "react-router";

export const CloudflareContext = unstable_createContext<{
  env: Cloudflare.Env;
  ctx: ExecutionContext;
  cf?: RequestInitCfProperties;
}>();

export function getBindings(context: unstable_RouterContextProvider) {
  return context.get(CloudflareContext).env;
}

export function getExecutionContext(
  context: unstable_RouterContextProvider
): ExecutionContext {
  return context.get(CloudflareContext).ctx;
}

export function getRequestProperties(
  context: unstable_RouterContextProvider
): RequestInitCfProperties | undefined {
  return context.get(CloudflareContext).cf;
}

export function waitUntil<T>(
  context: unstable_RouterContextProvider,
  promise: Promise<T>
) {
  return getExecutionContext(context).waitUntil(promise);
}
