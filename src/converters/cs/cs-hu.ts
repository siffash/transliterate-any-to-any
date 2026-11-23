import { Text } from "types";

export const csHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, csLatnNjRules + csLatnRules + latnHuRules);
};
