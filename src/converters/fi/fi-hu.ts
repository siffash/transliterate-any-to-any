import { Text } from "types";

export const fiHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
