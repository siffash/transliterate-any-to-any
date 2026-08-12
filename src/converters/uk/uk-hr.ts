import { Text } from "types";

export const ukHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
