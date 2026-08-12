import { Text } from "types";

export const csKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("data/cs-latn.rules");
  const { latnKkRules } = await import("data/latn-kk.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
