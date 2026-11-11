import { Text } from "types";

export const tgDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(tgLatnRules + latnGGhRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
