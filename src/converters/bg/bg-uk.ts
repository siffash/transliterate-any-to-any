import { Text } from "types";

export const bgUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyphenateBgPlaces } = await import("helpers/hyphenateBgPlaces");
  const { bgUkRules } = await import("data/bg/bg-uk.rules");

  const transliterator = RBT.fromRules(bgUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(hyphenateBgPlaces(text, false));
  } else {
    return text.map(text => transliterator.transliterate(hyphenateBgPlaces(text, false)));
  }
};
