import { Text } from "types";

export const bgMs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
