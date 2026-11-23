import { Text } from "types";

export const esIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, esLatnRules + latnIsRules);
};
