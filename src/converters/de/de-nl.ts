import { Text } from "types";

export const deNl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
