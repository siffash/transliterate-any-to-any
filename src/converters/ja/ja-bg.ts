import { Text } from "types";

export const jaBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaBgRules } = await import("data/ja/ja-bg.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaBgRules, { source: jaLatn, post: joinJaUnits });
};
