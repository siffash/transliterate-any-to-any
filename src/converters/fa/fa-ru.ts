import { Text } from "types";

export const faRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaShahrRules } = await import("data/fa/fa-ipa_shahr.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");
  const { ruLSoftRules } = await import("data/ru/ru_l-soft.rules");
  const { faRuYeRules } = await import("data/fa/fa-ru_ye.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreCyrlRules } = await import("data/ipa/ipa_t-restore_cyrl.rules");

  return convertText(
    text,
    ipaTHoldRules +
      ipaGemDRules +
      faIpaShahrRules +
      faIpaARules +
      ipaRuRules +
      ruLSoftRules +
      faRuYeRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreCyrlRules,
    { source: faIpa },
  );
};
