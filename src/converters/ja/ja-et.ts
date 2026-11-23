import { Text } from "types";

export const jaEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnEtRules, { source: jaLatn, post: joinJaUnits });
};
