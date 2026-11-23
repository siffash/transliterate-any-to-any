import { Text } from "types";

export const mkBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkBgRules } = await import("data/mk/mk-bg.rules");

  return convertText(text, mkBgRules);
};
