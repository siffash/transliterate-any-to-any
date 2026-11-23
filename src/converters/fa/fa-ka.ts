import { Text } from "types";

export const faKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaUvularQRules } = await import("data/ipa/ipa_uvular-q.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaKaTRestoreRules } = await import("data/ipa/ipa-ka_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules + ipaUvularQRules + faIpaARules + ipaKaRules + ipaKaTRestoreRules,
    { source: faIpaUvular },
  );
};
