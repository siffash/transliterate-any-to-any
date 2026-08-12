import { Text } from "types";

export const csPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("data/cs-latn.rules");
  const { latnPtRules } = await import("data/latn-pt.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
