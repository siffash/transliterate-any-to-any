import { Text } from "types";

export const csFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, csLatnRules + latnFrRules);
};
