import { Text } from "types";

export const roMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
