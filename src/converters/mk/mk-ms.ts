import { Text } from "types";

export const mkMs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
