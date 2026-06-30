import { Text } from "types";

export const bgAz = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
