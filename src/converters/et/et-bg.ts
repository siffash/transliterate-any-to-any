import { Text } from "types";

export const etBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
