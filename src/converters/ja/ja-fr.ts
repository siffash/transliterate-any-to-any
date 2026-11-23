import { Text } from "types";

export const jaFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnFrRules, { source: jaLatn, post: joinJaUnits });
};
