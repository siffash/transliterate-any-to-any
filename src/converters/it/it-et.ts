import { Text } from "types";

export const itEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnEtRules } = await import("constants/latn-et.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
