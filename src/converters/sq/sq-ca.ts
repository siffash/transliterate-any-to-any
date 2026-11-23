import { Text } from "types";

export const sqCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  return convertText(text, sqLatnRules + latnCaRules);
};
