import { Text } from "types";

export const tgDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  const transliterator = RBT.fromRules(tgLatnRules + latnGGhRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
