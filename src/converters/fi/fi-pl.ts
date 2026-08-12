import { Text } from "types";

export const fiPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi-latn.rules");
  const { latnPlRules } = await import("data/latn-pl.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
