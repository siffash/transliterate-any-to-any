import { Text } from "types";

export const bgTr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
