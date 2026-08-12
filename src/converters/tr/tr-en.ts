import { Text } from "types";

export const trEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr-latn.rules");
  const { latnEnRules } = await import("data/latn-en.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
