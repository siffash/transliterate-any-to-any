import { Text } from "types";

export const hiAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiArRules } = await import("constants/hi-ar.rules");

  const transliterator = RBT.fromRules(hiArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
