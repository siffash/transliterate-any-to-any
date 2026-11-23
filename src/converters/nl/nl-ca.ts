import { Text } from "types";

export const nlCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  return convertText(text, nlLatnRules + latnCaRules + latnCaSRules);
};
