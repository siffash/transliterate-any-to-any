import { Text } from "types";

export const plSv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
