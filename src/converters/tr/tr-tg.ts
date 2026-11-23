import { Text } from "types";

export const trTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGhRules } = await import("data/tr/tr-latn_front-gh.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnTgGlottalRules } = await import("data/latn/latn-tg_glottal.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, trLatnFrontGhRules + trLatnRules + latnTgGlottalRules + latnTgRules);
};
