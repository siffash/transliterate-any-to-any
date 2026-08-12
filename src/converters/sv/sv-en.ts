import { Text } from "types";

export const svEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("data/sv-latn.rules");
  const { latnEnRules } = await import("data/latn-en.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
