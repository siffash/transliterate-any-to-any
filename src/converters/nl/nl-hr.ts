import { Text } from "types";

export const nlHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
