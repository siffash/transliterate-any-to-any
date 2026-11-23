import { Text } from "types";

export const jaEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaEnRules } = await import("data/ja/ja-en.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaEnRules, { source: jaLatn, post: joinJaUnits });
};
