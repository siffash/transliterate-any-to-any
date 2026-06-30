import { Text } from "types";

export const slAz = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
