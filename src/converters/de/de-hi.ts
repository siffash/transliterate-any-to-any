import { Text } from "types";

export const deHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(
    text,
    deIpaRules + ipaErRules + ipaFinalSchwaERules + ipaHiLongARules + ipaHiRules,
  );
};
