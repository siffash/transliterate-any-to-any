import { Text } from "types";

export const isBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("constants/is-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
