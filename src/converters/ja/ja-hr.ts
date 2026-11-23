import { Text } from "types";

export const jaHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");
  const { latnJaAiRules } = await import("data/latn/latn_ja-ai.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnHrRules + latnJaAiRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
