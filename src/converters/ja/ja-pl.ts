import { Text } from "types";

export const jaPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnPlRules, { source: jaLatn, post: joinJaUnits });
};
