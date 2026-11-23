import { Text } from "types";

export const jaVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnViRules, { source: jaLatn, post: joinJaUnits });
};
