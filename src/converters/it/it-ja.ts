import { Text } from "types";

export const itJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaJaWRules } = await import("data/ipa/ipa-ja_w.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { itIpaJaRules } = await import("data/it/it-ipa_ja.rules");

  return convertText(text, itIpaRules + itIpaJaRules + ipaJaWRules + ipaJaRules);
};
