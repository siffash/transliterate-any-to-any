import { Text } from "types";

export const elRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnRuRules } = await import("constants/latn-ru.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
