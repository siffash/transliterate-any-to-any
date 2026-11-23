import { Text } from "types";

export const jaTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaTgRules } = await import("data/ja/ja-tg.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaTgRules, { source: jaLatn, post: joinJaUnits });
};
