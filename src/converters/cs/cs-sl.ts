import { Text } from "types";

export const csSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, csLatnRules + latnSlRules);
};
