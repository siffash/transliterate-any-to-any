import { Text } from "types";

export const fiHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, fiLatnRules + latnDiphthongIyRules + latnHyRules + hyEvRules);
};
