import { Text } from "types";

export const azMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, azLatnRules + trAzKkLatnOuRules + latnMkRules);
};
