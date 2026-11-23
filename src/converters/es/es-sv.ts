import { Text } from "types";

export const esSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, esLatnRules + latnSvRules);
};
