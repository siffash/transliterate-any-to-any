import { Text } from "types";

export const jaRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnRoRules, { source: jaLatn, post: joinJaUnits });
};
