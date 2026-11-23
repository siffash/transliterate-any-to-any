import { Text } from "types";

export const esBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { esLatnDiphthongIRules } = await import("data/es/es-latn_diphthong-i.rules");

  return convertText(text, esLatnDiphthongIRules + esLatnRules + latnBgRules);
};
