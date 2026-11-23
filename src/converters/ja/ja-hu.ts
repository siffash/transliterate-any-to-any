import { Text } from "types";

export const jaHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaCsRules } = await import("data/ja/ja-cs.rules");
  const { jaCsHuRules } = await import("data/ja/ja-cs_hu.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaCsRules + jaCsHuRules, { source: jaLatn, post: joinJaUnits });
};
