import { Text } from "types";

export const esKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, esLatnRules + latnKaRules);
};
