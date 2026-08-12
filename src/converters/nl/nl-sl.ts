import { Text } from "types";

export const nlSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
