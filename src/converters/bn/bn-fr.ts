import { Text } from "types";

export const bnFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnLatnRules } = await import("constants/bn-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
