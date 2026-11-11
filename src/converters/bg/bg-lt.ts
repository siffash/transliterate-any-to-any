import { Text } from "types";

export const bgLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnLtIaRules } = await import("data/latn/latn-lt_ia.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnLtIaRules + latnIaRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
