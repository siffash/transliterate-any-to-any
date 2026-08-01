import { Text } from "types";

export const lbMs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
