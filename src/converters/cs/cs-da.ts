import { Text } from "types";

export const csDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, csLatnRules + latnDaRules);
};
