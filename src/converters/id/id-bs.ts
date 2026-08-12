import { Text } from "types";

export const idBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
