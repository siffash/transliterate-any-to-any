import { Text } from "types";

export const enTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");

  return convertText(text, ipaTrRules, { source: enIpa, caseLang: "tr" });
};
