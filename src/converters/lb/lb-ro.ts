import { Text } from "types";

export const lbRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  const transliterator = RBT.fromRules(latnIRules + latnRoRules + latnRoKRules);

  if (typeof text === "string") {
    const latn = await lbLatn<string>(text);
    return transliterator.transliterate(latn);
  } else {
    const latnArray = await lbLatn<string[]>(text);
    return latnArray.map(latn => transliterator.transliterate(latn));
  }
};
