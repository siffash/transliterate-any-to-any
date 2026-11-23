import { Text } from "types";

export const svDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, svLatnRules + latnDaRules);
};
