import { Text } from "types";

export const jaPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnPtRules, { source: jaLatn, post: joinJaUnits });
};
