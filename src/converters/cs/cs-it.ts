import { Text } from "types";

export const csIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
