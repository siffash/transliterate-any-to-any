import { Text } from "types";

export const hiNo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnNoRules } = await import("constants/latn-no.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
