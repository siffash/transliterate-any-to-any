import { Text } from "types";

export const lbCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
