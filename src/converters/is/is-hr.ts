import { Text } from "types";

export const isHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("data/is-latn.rules");
  const { latnHrRules } = await import("data/latn-hr.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
