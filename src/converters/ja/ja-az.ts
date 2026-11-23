import { Text } from "types";

export const jaAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnAyRules + latnAzRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
