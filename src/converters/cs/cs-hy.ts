import { Text } from "types";

export const csHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
