import { Text } from "types";

export const elSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
