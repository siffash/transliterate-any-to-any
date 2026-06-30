import { Text } from "types";

export const ltNo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnNoRules } = await import("constants/latn-no.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
