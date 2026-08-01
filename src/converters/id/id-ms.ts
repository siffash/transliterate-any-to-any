import { Text } from "types";

export const idMs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idMsRules } = await import("constants/id-ms.rules");

  const transliterator = RBT.fromRules(idMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
