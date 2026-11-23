import { Text } from "types";

export const faHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaHiRules } = await import("data/fa/fa-ipa_hi.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaHiTRestoreRules } = await import("data/ipa/ipa-hi_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaHiRules +
      faIpaARules +
      ipaHiRules +
      ipaHiTRestoreRules +
      ipaViramaDropRules,
    { source: faIpa },
  );
};
