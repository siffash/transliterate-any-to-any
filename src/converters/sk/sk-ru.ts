import { Text } from "types";

export const skRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { latnRuHRules } = await import("data/latn/latn-ru_h.rules");
  const { latnRuPalatalRules } = await import("data/latn/latn-ru_palatal.rules");

  return convertText(
    text,
    csSkLatnPalatalRules + skLatnRules + latnRuHRules + latnRuPalatalRules + latnRuRules,
  );
};
