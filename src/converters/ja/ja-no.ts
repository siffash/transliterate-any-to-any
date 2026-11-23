import { Text } from "types";

export const jaNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnNoRules, { source: jaLatn, post: joinJaUnits });
};
