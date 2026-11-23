import { Text } from "types";

export const etBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");

  return convertText(text, etLatnRules + latnDiphthongIyRules + latnCyrlYaRules + latnBgRules);
};
