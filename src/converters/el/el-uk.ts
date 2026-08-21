import { Text } from "types";

export const elUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
