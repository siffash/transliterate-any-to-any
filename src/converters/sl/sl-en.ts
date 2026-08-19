import { Text } from "types";

export const slEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
