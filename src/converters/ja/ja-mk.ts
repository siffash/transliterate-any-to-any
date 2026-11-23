import { Text } from "types";

export const jaMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaMkRules } = await import("data/ja/ja-mk.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaMkRules, { source: jaLatn, post: joinJaUnits });
};
