import { Text } from "types";

export const jaEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnEsRules, { source: jaLatn, post: joinJaUnits });
};
