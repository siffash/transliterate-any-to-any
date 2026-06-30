import { Text } from "types";

export const trKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnKaRules } = await import("constants/latn-ka.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
