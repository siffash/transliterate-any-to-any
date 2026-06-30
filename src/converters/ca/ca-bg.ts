import { Text } from "types";

export const caBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
