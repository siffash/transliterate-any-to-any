import { Text } from "types";

export const roLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnVjvRules } = await import("data/ro/ro-latn_vjv.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { roLatnLtRules } = await import("data/ro/ro-latn_lt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(
    roLatnLtRules + roLatnRules + roLatnVjvRules + latnIRules + latnLtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
