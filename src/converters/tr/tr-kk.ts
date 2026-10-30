import { Text } from "types";

export const trKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { latnKkTurkicRules } = await import("data/latn/latn-kk_turkic.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnKkRules + latnKkTurkicRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
