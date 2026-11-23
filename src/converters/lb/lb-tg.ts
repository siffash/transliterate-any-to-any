import { Text } from "types";

export const lbTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, latnSilentHRules + latnTgRules, { source: lbLatn });
};
