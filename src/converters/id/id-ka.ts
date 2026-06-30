import { Text } from "types";

export const idKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnKaRules } = await import("constants/latn-ka.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
