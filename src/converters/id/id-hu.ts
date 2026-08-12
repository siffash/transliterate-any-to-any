import { Text } from "types";

export const idHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
