import { Text } from "types";

export const jaIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnIsRules, { source: jaLatn, post: joinJaUnits });
};
