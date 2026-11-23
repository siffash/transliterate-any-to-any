import { Text } from "types";

export const csEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, csLatnRules + latnEtRules);
};
