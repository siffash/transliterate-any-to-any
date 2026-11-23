import { Text } from "types";

export const csSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { csLatnJeRules } = await import("data/cs/cs-latn_je.rules");
  const { csLatnSrRules } = await import("data/cs/cs-latn_sr.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(
    text,
    csLatnSrRules + csLatnNjRules + csLatnJeRules + csLatnRules + latnSrRules,
  );
};
