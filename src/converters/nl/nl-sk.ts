import { Text } from "types";

export const nlSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
