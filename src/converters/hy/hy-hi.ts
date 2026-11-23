import { Text } from "types";

export const hyHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { hyIpaSchwaRules } = await import("data/hy/hy-ipa_schwa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");

  return convertText(
    text,
    hyIpaRules + hyIpaSchwaRules + ipaHiLongARules + ipaHiORules + ipaHiRules,
  );
};
