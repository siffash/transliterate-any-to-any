import { Text } from "types";

export const svHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, svIpaRules + svNoIpaRRules + ipaHiLongARules + ipaHiRules);
};
