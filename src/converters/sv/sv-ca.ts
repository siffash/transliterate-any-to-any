import { Text } from "types";

export const svCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  return convertText(text, svLatnRules + latnCaRules);
};
