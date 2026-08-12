import { Text } from "types";

export const nlHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
