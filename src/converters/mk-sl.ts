import { Text } from "types";

export const mkSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
