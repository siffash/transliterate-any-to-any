import { Text } from "types";

export const hyCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
