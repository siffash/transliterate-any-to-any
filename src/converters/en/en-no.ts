import { Text } from "types";

export const enNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  return convertText(text, ipaNoRules, { source: enIpa, caseLang: "no" });
};
