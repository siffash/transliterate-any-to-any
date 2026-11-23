import { Text } from "types";

export const jaRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaRuRules } = await import("data/ja/ja-ru.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaRuRules, { source: jaLatn, post: joinJaUnits });
};
