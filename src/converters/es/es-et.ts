import { Text } from "types";

export const esEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, esLatnRules + latnEtRules);
};
