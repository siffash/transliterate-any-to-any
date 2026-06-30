import { Text } from "types";

export const hiIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
