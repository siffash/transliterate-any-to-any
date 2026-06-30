import { Text } from "types";

export const elUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
