import { Text } from "types";

export const nlCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
