import { Text } from "types";

export const azKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { azLatnKkRules } = await import("data/az/az-latn_kk.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnKkRules + azLatnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
