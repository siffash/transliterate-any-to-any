import { Text } from "types";

export const nlDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnDeRules } = await import("constants/latn-de.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
