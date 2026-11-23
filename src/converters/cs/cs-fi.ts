import { Text } from "types";

export const csFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, csLatnRules + latnFiRules);
};
