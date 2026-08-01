import { Text } from "types";

export const msSv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
