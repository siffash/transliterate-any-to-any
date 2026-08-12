import { Text } from "types";

export const idUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id-latn.rules");
  const { latnUkRules } = await import("data/latn-uk.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
