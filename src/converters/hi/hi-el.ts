import { Text } from "types";

export const hiEl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
