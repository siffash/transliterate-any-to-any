import { Text } from "types";

export const esAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaArLlRules } = await import("data/ipa/ipa-ar_ll.rules");

  return convertText(text, esIpaZRules + esIpaRules + ipaArLlRules + ipaArRules);
};
