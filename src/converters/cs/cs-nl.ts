import { Text } from "types";

export const csNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
