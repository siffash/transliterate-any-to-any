import { RBT as RBT_ICU4C } from "icu-transliterator";
import { RBT as RBT_JS } from "./rbt";

export const settings = { JS_IMPLEMENTATION: false };

export const RBT = new Proxy({} as typeof RBT_JS, {
  get(_target, prop, receiver) {
    const impl = settings.JS_IMPLEMENTATION ? RBT_JS : RBT_ICU4C;

    const value = Reflect.get(impl, prop, receiver);

    return typeof value === "function" ? value.bind(impl) : value;
  },
});
