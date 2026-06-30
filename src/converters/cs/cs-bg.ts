import { Text } from "types";

export const csBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
