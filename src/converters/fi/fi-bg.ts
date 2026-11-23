import { Text } from "types";

export const fiBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");

  return convertText(text, fiLatnRules + latnDiphthongIyRules + latnCyrlYaRules + latnBgRules);
};
