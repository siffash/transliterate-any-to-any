import { Text } from "types";

export const azTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnTgGlottalRules } = await import("data/latn/latn-tg_glottal.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { azLatnARules } = await import("data/az/az-latn_a.rules");

  return convertText(text, azLatnRules + azLatnARules + latnTgGlottalRules + latnTgRules);
};
