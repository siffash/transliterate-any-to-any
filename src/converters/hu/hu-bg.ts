import { Text } from "types";

export const huBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu-latn.rules");
  const { latnBgRules } = await import("data/latn-bg.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
