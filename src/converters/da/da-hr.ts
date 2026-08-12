import { Text } from "types";

export const daHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da-latn.rules");
  const { latnHrRules } = await import("data/latn-hr.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
