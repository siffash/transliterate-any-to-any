import { Text } from "types";

export const nlKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
