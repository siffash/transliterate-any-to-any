import { Text } from "types";

export const esHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, esLatnRules + latnHrRules);
};
