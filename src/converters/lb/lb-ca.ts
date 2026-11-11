import { Text } from "types";

export const lbCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");
  const { lbLatnXRules } = await import("data/lb/lb-latn_x.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  const transliterator = RBT.fromRules(lbLatnXRules + latnCaRules + latnKQuRules + latnCaSRules);

  if (typeof text === "string") {
    const latn = await lbLatn<string>(text);
    return transliterator.transliterate(latn);
  } else {
    const latnArray = await lbLatn<string[]>(text);
    return latnArray.map(latn => transliterator.transliterate(latn));
  }
};
