import { Text } from "types";

export const kkUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkUkRules } = await import("data/kk/kk-uk.rules");

  return convertText(text, kkUkRules);
};
