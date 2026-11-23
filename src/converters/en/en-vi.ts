import { Text } from "types";

export const enVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaViRules } = await import("data/ipa/ipa-vi.rules");

  return convertText(text, ipaViRules, { source: enIpa, caseLang: "uk" });
};
