import { Text } from "types";

export const hyEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyEnRules } = await import("data/hy/hy-en.rules");

  return convertText(text, hyEnRules);
};
