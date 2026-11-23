import { Text } from "types";

export const jaLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnLbRules, { source: jaLatn, post: joinJaUnits });
};
