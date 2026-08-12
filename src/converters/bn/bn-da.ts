import { Text } from "types";

export const bnDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnLatnRules } = await import("data/bn-latn.rules");
  const { latnDaRules } = await import("data/latn-da.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
