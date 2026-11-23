import { Text } from "types";

export const csPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { csLatnIeRules } = await import("data/cs/cs-latn_ie.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, csLatnNjRules + csLatnIeRules + csLatnRules + latnPlRules);
};
