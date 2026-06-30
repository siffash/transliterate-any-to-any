import { Text } from "types";

export const nlUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
