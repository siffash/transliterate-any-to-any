import { Text } from "types";

export const jaBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");
  const { latnJaAiRules } = await import("data/latn/latn_ja-ai.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnBsRules + latnJaAiRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
