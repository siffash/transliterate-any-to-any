import { Text } from "types";

export const jaFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnFiRules, { source: jaLatn, post: joinJaUnits });
};
