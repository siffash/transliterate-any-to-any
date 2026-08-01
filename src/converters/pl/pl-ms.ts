import { Text } from "types";

export const plMs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnMsRules } = await import("constants/latn-ms.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
