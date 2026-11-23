import { Text } from "types";

export const svEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, svLatnRules + latnEnRules);
};
