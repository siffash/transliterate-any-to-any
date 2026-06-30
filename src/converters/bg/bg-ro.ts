import { Text } from "types";

export const bgRo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
