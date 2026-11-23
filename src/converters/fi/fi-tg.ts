import { Text } from "types";

export const fiTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");

  return convertText(text, fiLatnRules + latnDiphthongIyRules + latnThTRules + latnTgRules);
};
