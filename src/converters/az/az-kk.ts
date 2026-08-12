import { Text } from "types";

export const azKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
