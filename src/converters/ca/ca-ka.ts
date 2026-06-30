import { Text } from "types";

export const caKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnKaRules } = await import("constants/latn-ka.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
