import { Text } from "types";

export const esJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaJaWRules } = await import("data/ipa/ipa-ja_w.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaJaRules } = await import("data/es/es-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { esHuaRules } = await import("data/es/es_hua.rules");

  return convertText(text, esHuaRules + esIpaRules + esIpaJaRules + ipaJaWRules + ipaJaRules);
};
