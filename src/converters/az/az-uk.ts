import { Text } from "types";

export const azUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnOeRules } = await import("data/latn/latn_oe.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { azLatnInitialARules } = await import("data/az/az-latn_initial-a.rules");

  return convertText(text, azLatnRules + azLatnInitialARules + latnOeRules + latnUkRules);
};
