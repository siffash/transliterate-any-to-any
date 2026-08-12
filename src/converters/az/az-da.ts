import { Text } from "types";

export const azDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az-latn.rules");
  const { latnDaRules } = await import("data/latn-da.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
