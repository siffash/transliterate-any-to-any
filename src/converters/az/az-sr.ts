import { Text } from "types";

export const azSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { azLatnQKRules } = await import("data/az/az-latn_q-k.rules");

  return convertText(text, azLatnQKRules + azLatnRules + trAzKkLatnOuRules + latnSrRules);
};
