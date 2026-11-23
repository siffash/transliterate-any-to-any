import { Text } from "types";

export const jaCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaCsRules } = await import("data/ja/ja-cs.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaCsRules, { source: jaLatn, post: joinJaUnits });
};
