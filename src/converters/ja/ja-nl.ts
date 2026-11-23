import { Text } from "types";

export const jaNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnNlRules, { source: jaLatn, post: joinJaUnits });
};
