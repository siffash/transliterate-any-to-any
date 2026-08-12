import { Text } from "types";

export const hyCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
