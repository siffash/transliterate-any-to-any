import { Text } from "types";

export const msMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnMkRules } = await import("constants/latn-mk.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
