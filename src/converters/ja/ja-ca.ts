import { Text } from "types";

export const jaCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnCaRules, { source: jaLatn, post: joinJaUnits });
};
