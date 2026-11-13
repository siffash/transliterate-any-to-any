import { Text } from "types";

export const trBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnFrontGRules } = await import("data/tr/tr-latn_front-g.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(trLatnFrontGRules + trLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
