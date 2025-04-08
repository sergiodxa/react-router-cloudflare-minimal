import {
  unstable_createContext,
  unstable_RouterContextProvider,
} from "react-router";

export class ClientStore {
  private map = new Map<string, any>();
  private events = new EventTarget();

  subscribe(callback: () => void) {
    this.events.addEventListener("change", callback);
    return () => this.events.removeEventListener("change", callback);
  }

  set(key: string, value: any) {
    this.map.set(key, value);
    this.events.dispatchEvent(new Event("change"));
  }

  get(key: string) {
    return this.map.get(key);
  }

  has(key: string) {
    return this.map.has(key);
  }

  delete(key: string) {
    this.map.delete(key);
    this.events.dispatchEvent(new Event("change"));
  }

  clear() {
    this.map.clear();
    this.events.dispatchEvent(new Event("change"));
  }

  keys() {
    return Array.from(this.map.keys());
  }
}

export const StoreContext = unstable_createContext<ClientStore>();

export function getStore(context: unstable_RouterContextProvider) {
  return context.get(StoreContext);
}
