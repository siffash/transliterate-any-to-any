import { Text } from "types";

export const msId = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msIdRules } = await import("constants/ms-id.rules");

  const transliterator = RBT.fromRules(msIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
