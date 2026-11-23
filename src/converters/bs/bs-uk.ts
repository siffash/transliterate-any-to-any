import { Text } from "types";

export const bsUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnUkSouthSlavicIRules } = await import("data/latn/latn-uk_south-slavic-i.rules");
  const { ukSouthSlavicAdjRules } = await import("data/uk/uk_south-slavic-adj.rules");
  const { ukAcRules } = await import("data/uk/uk_ac.rules");
  const { ukIcaRules } = await import("data/uk/uk_ica.rules");
  const { ukIjaRules } = await import("data/uk/uk_ija.rules");

  return convertText(
    text,
    bsLatnRules +
      latnUkSouthSlavicIRules +
      latnUkRules +
      ukIjaRules +
      ukIcaRules +
      ukAcRules +
      ukSouthSlavicAdjRules,
  );
};
