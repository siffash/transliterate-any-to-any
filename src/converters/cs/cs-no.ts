import { Text } from "types";

export const csNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, csLatnRules + latnNoRules);
};
