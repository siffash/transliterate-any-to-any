import { Text } from "types";

export const csPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, csLatnRules + latnPtRules);
};
