import { Text } from "types";

export const csLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { csSkLatnLtRules } = await import("data/latn/cs_sk-latn_lt.rules");

  const transliterator = RBT.fromRules(csSkLatnLtRules + csLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
