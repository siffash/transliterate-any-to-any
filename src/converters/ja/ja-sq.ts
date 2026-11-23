import { Text } from "types";

export const jaSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnHardRules } = await import("data/latn/latn_hard.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnHardRules + latnSqRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
