import { Text } from "types";

export const daSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("constants/da-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
