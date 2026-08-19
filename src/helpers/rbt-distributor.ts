import { RBT as RBT_JS } from "./rbt";

type RbtApi = typeof RBT_JS;

// 1. Default to JS implementation, which is already loaded
let isJsImpl = true;
let activeImpl: RbtApi = RBT_JS;
let nativeCache: RbtApi;

export const settings = {
  get JS_IMPLEMENTATION() {
    return isJsImpl;
  },
  set JS_IMPLEMENTATION(value: boolean) {
    if (isJsImpl === value) return;
    isJsImpl = value;

    // 2. If JS, switch immediately.
    // If Native, apply the cache (which is `undefined` on first run).
    activeImpl = value ? RBT_JS : nativeCache;
  },
};

export const RBT = new Proxy({} as RbtApi, {
  get(_target, prop) {
    // 3. HOT PATH: Completely bypassed if using JS or already loaded native!
    // This only executes once: the very first time Native is accessed.
    if (!activeImpl) {
      activeImpl = nativeCache = require("icu-transliterator").RBT;
    }

    // 4. Blazing fast direct property access
    return activeImpl[prop as keyof RbtApi];
  },
});
