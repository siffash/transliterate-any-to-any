import { Text } from "types";

export const huEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnEtRules } = await import("constants/latn-et.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
