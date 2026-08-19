import { Text } from "types";

export const etEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
