import { Text } from "types";

export const deHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
