import { Text } from "types";

export const thKo = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");
  const { thIpaTsRules } = await import("data/th/th-ipa_ts.rules");

  return mapText(await thIpaText(text, thIpaTsRules + ipaKoRules), text =>
    text.replace(/(?<=[\p{L}\p{M}])-(?=\p{L})/gu, ""),
  );
};
