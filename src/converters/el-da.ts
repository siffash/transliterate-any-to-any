import { Text } from "types";

export const elDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnDaRules } = await import("constants/latn-da.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
