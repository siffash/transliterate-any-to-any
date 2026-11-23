import { Text } from "types";

export const esHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, esIpaZRules + esIpaRules + ipaHiLongARules + ipaHiRules);
};
