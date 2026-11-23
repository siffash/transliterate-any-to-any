import { Text } from "types";

export const kkBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkBgRules } = await import("data/kk/kk-bg.rules");

  return convertText(text, kkBgRules);
};
