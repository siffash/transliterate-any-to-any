import { Text } from "types";

export const mtBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
