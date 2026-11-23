import { Text } from "types";

export const kkSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, kkLatnRules + trAzKkLatnOuRules + latnSrRules);
};
