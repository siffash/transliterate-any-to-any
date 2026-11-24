import { Text } from "types";

export const ptHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(
    text,
    ptIpaRules + ptIpaNasalRules + ipaHiLongARules + ipaHiORules + ipaHiRules,
  );
};
