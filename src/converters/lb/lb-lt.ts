import { Text } from "types";

export const lbLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");

  return convertText(text, latnLtRules + latnVvRules, { source: lbLatn });
};
