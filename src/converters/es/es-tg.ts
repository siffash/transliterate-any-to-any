import { Text } from "types";

export const esTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { esLatnDiphthongIRules } = await import("data/es/es-latn_diphthong-i.rules");

  return convertText(text, esLatnDiphthongIRules + esLatnRules + latnTgRules);
};
