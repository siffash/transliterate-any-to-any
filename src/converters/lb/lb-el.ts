import { Text } from "types";

export const lbEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, latnSilentHRules + latnElRules, { source: lbLatn });
};
