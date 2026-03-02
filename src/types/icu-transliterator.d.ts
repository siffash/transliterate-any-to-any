declare module "icu-transliterator" {
  export const RBT: {
    (id: string, dir?: typeof RBT.FORWARD | typeof RBT.REVERSE): RBTInstance;
    fromRules(rules: string, dir?: typeof RBT.FORWARD | typeof RBT.REVERSE): RBTInstance;
    register(id: string, rules: string, dir?: typeof RBT.FORWARD | typeof RBT.REVERSE): void;
    FORWARD: "FORWARD";
    REVERSE: "REVERSE";
  };

  export interface RBTInstance {
    transliterate(text: string): string;
  }
}
