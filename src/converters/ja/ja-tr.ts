import { Text } from "types";

export const jaTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnTrRules, { source: jaLatn, post: joinJaUnits });
};
