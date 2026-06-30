import { Text } from "types";

export const roEt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnEtRules } = await import("constants/latn-et.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
