import { Text } from "types";

export const isBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("constants/is-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
