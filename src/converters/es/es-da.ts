import { Text } from "types";

export const esDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, esLatnRules + latnDaRules);
};
