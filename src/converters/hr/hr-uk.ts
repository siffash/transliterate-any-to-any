import { Text } from "types";

export const hrUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnUkSouthSlavicIRules } = await import("data/latn/latn-uk_south-slavic-i.rules");
  const { ukSouthSlavicAdjRules } = await import("data/uk/uk_south-slavic-adj.rules");
  const { ukEcRules } = await import("data/uk/uk_ec.rules");
  const { ukAcRules } = await import("data/uk/uk_ac.rules");
  const { ukIcaRules } = await import("data/uk/uk_ica.rules");
  const { ukIjaRules } = await import("data/uk/uk_ija.rules");

  const transliterator = RBT.fromRules(
    hrLatnRules +
      latnUkSouthSlavicIRules +
      latnUkRules +
      ukIjaRules +
      ukIcaRules +
      ukAcRules +
      ukEcRules +
      ukSouthSlavicAdjRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
