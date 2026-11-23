import { Text } from "types";

export const jaLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnZDzRules } = await import("data/latn/latn_z-dz.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnZDzRules + latnLvRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
