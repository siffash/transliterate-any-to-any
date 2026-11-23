import { Text } from "types";

export const jaDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnDeRules, { source: jaLatn, post: joinJaUnits });
};
