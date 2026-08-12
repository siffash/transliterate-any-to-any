import { Text } from "types";

export const etUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("data/et-latn.rules");
  const { latnUkRules } = await import("data/latn-uk.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
