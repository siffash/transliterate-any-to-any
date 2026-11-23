import { Text } from "types";

export const thJa = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { thIpaTsRules } = await import("data/th/th-ipa_ts.rules");
  const { thIpaJaRules } = await import("data/th/th-ipa_ja.rules");
  const { ipaJaNgRules } = await import("data/ipa/ipa-ja_ng.rules");

  return mapText(
    await thIpaText(text, thIpaJaRules + thIpaTsRules + ipaJaNgRules + ipaJaRules),
    text => text.replace(/(?<=[\p{L}\p{M}])-(?=\p{L})/gu, ""),
  );
};
