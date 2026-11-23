import { Text } from "types";

export const jaId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnIdRules, { source: jaLatn, post: joinJaUnits });
};
