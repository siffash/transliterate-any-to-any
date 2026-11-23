import { Text } from "types";

export const jaLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnZDzRules } = await import("data/latn/latn_z-dz.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnZDzRules + latnLtRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
