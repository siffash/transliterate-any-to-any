import { Text } from "types";

export const jaSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnSvRules, { source: jaLatn, post: joinJaUnits });
};
