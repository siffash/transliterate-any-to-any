import { Text } from "types";

export const jaSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { latnJaAiRules } = await import("data/latn/latn_ja-ai.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnSlRules + latnJaAiRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
