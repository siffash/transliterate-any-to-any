import { Text } from "types";

export const lbEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnEsXRules } = await import("data/latn/latn-es_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(
    latnSilentHRules + latnIRules + latnShSRules + latnEsRules + latnEsXRules + latnKQuRules,
  );

  if (typeof text === "string") {
    const latn = await lbLatn<string>(text);
    return transliterator.transliterate(latn);
  } else {
    const latnArray = await lbLatn<string[]>(text);
    return latnArray.map(latn => transliterator.transliterate(latn));
  }
};
