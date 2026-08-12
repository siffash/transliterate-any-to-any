import { Text } from "types";

export const kkBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk-latn.rules");
  const { latnBgRules } = await import("data/latn-bg.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
