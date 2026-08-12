import { Text } from "types";

export const etBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("data/et-latn.rules");
  const { latnBsRules } = await import("data/latn-bs.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
