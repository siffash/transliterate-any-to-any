import { Text } from "types";

export const roEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
