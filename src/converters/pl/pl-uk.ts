import { Text } from "types";

export const plUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
