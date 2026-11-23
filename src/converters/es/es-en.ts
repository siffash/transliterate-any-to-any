import { Text } from "types";

export const esEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, esLatnRules + latnEnRules);
};
