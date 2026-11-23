import { Text } from "types";

export const lvLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLtRules } = await import("data/lv/lv-lt.rules");

  return convertText(text, lvLtRules);
};
