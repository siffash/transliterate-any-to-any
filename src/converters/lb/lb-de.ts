import { Text } from "types";

export const lbDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(latnIRules + latnDeRules);

  if (typeof text === "string") {
    const latn = await lbLatn<string>(text);
    return transliterator.transliterate(latn);
  } else {
    const latnArray = await lbLatn<string[]>(text);
    return latnArray.map(latn => transliterator.transliterate(latn));
  }
};
