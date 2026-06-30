import { Text } from "types";

export const plKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
