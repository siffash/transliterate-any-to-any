import { Text } from "types";

export const csNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, csLatnRules + latnNlRules);
};
