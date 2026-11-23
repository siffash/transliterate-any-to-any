import { Text } from "types";

export const azRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnOeRules } = await import("data/latn/latn_oe.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { azLatnInitialARules } = await import("data/az/az-latn_initial-a.rules");

  return convertText(text, azLatnRules + azLatnInitialARules + latnOeRules + latnRuRules);
};
