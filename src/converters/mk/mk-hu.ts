import { Text } from "types";

export const mkHu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
