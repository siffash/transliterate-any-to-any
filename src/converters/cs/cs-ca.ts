import { Text } from "types";

export const csCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("data/cs-latn.rules");
  const { latnCaRules } = await import("data/latn-ca.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
