import { Text } from "types";

export const bgKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyphenateBgPlaces } = await import("helpers/hyphenateBgPlaces");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(hyphenateBgPlaces(text));
  } else {
    return text.map(text => transliterator.transliterate(hyphenateBgPlaces(text)));
  }
};
