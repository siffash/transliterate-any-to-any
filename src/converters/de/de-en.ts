import { Text } from "types";

export const deEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
