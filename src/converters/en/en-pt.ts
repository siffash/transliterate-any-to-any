import { Text } from "types";

export const enPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  return convertText(text, ipaPtRules, { source: enIpa, caseLang: "pt" });
};
