import { Text } from "types";

export const jaSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaCsRules } = await import("data/ja/ja-cs.rules");
  const { jaCsSkRules } = await import("data/ja/ja-cs_sk.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaCsRules + jaCsSkRules, { source: jaLatn, post: joinJaUnits });
};
