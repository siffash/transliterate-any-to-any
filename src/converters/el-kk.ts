import { Text } from "types";

export const elKk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
