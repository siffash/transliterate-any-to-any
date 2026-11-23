import { Text } from "types";

export const slUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnUkSouthSlavicIRules } = await import("data/latn/latn-uk_south-slavic-i.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");
  const { ukSouthSlavicAdjRules } = await import("data/uk/uk_south-slavic-adj.rules");
  const { ukEcRules } = await import("data/uk/uk_ec.rules");
  const { ukIcaRules } = await import("data/uk/uk_ica.rules");
  const { ukIjaRules } = await import("data/uk/uk_ija.rules");

  return convertText(
    text,
    slLatnRules +
      latnUkSouthSlavicIRules +
      latnUkRules +
      ukIjaRules +
      ukIcaRules +
      ukEcRules +
      ukSouthSlavicAdjRules +
      latnApostropheDropRules,
  );
};
