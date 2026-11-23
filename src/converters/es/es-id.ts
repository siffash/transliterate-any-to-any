import { Text } from "types";

export const esId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, esLatnRules + latnIdRules);
};
