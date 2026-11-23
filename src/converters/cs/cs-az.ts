import { Text } from "types";

export const csAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, csLatnRules + latnAzRules);
};
