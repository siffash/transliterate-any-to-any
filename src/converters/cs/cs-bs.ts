import { Text } from "types";

export const csBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { csLatnJeRules } = await import("data/cs/cs-latn_je.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(
    text,
    csSkLatnPalatalRules + csLatnNjRules + csLatnJeRules + csLatnRules + latnBsRules,
  );
};
