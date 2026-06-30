import { Text } from "types";

export const etHu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
