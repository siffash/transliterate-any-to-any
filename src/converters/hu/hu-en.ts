import { Text } from "types";

export const huEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu-latn.rules");
  const { latnEnRules } = await import("data/latn-en.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
