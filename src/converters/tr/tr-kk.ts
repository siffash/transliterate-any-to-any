import { Text } from "types";

export const trKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { trLatnKkRules } = await import("data/tr/tr-latn_kk.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnKkRules + trLatnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
