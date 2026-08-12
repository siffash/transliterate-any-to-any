import { Text } from "types";

export const lbUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("data/lb-latn.rules");
  const { latnUkRules } = await import("data/latn-uk.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
