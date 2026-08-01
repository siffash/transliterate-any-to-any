import { Text } from "types";

export const trMs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
