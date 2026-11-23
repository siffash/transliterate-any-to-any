import { Text } from "types";

export const esNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, esLatnRules + latnNoRules);
};
