import { Text } from "types";

export const jaDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnDaRules, { source: jaLatn, post: joinJaUnits });
};
