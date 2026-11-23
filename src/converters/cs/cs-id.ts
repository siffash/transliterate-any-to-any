import { Text } from "types";

export const csId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, csLatnRules + latnIdRules);
};
