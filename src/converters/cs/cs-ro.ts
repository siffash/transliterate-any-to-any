import { Text } from "types";

export const csRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, csLatnRules + latnRoRules);
};
