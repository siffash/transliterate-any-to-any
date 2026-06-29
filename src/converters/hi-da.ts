import { Text } from "types";

export const hiDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnDaRules } = await import("constants/latn-da.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
