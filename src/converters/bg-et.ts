import { Text } from "types";

export const bgEt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnEtRules } = await import("constants/latn-et.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
