import { Text } from "types";

export const jaMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { jaLatnApostropheRules } = await import("data/ja/ja-latn_apostrophe.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + jaLatnApostropheRules + latnMtGlideIRules + latnMtRules, {
    source: jaLatn,
    post: joinJaUnits,
  });
};
