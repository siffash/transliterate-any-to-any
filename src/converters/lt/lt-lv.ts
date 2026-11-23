import { Text } from "types";

export const ltLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLvRules } = await import("data/lt/lt-lv.rules");

  return convertText(text, ltLvRules);
};
