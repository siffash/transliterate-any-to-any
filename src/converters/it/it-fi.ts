import { Text } from "types";

export const itFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
