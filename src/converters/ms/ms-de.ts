import { Text } from "types";

export const msDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(msIdLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
