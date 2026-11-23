import { Text } from "types";

export const kkMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkMkRules } = await import("data/kk/kk-mk.rules");

  return convertText(text, kkMkRules);
};
