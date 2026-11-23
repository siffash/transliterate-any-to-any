import { Text } from "types";

export const esHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { esLatnDiphthongIRules } = await import("data/es/es-latn_diphthong-i.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, esLatnDiphthongIRules + esLatnRules + latnHyRules + hyEvRules);
};
