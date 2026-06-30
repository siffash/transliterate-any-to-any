import { Text } from "types";

export const idEt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnEtRules } = await import("constants/latn-et.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
