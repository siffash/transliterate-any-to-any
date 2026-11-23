import { Text } from "types";

export const noHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { noIpaOyRules } = await import("data/no/no-ipa_oy.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(
    text,
    noIpaRules + svNoIpaRRules + noIpaOyRules + ipaHiLongARules + ipaHiRules,
  );
};
