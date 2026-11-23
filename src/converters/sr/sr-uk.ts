import { Text } from "types";

export const srUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnUkSouthSlavicIRules } = await import("data/latn/latn-uk_south-slavic-i.rules");
  const { ukSouthSlavicAdjRules } = await import("data/uk/uk_south-slavic-adj.rules");
  const { ukIcaRules } = await import("data/uk/uk_ica.rules");
  const { ukIjaRules } = await import("data/uk/uk_ija.rules");

  return convertText(
    text,
    srLatnRules +
      latnUkSouthSlavicIRules +
      latnUkRules +
      ukIjaRules +
      ukIcaRules +
      ukSouthSlavicAdjRules,
  );
};
