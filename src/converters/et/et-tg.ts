import { Text } from "types";

export const etTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");

  return convertText(text, etLatnRules + latnDiphthongIyRules + latnThTRules + latnTgRules);
};
