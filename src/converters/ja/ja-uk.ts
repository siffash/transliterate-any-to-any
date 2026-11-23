import { Text } from "types";

export const jaUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaUkRules } = await import("data/ja/ja-uk.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaUkRules, { source: jaLatn, post: joinJaUnits });
};
