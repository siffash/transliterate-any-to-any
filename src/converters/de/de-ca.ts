import { Text } from "types";

export const deCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  return convertText(text, deLatnRules + latnCaRules + latnCaSRules);
};
