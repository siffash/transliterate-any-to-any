import { Text } from "types";

export const jaSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { jaSrRules } = await import("data/ja/ja-sr.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + jaSrRules, { source: jaLatn, post: joinJaUnits });
};
