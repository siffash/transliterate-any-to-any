import { Text } from "types";

export const elEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elEnRules } = await import("data/el-en.rules");

  const transliterator = RBT.fromRules(elEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
