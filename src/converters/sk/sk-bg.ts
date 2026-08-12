import { Text } from "types";

export const skBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk-latn.rules");
  const { latnBgRules } = await import("data/latn-bg.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
