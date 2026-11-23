import { Text } from "types";

export const faBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaBnTRestoreRules } = await import("data/ipa/ipa-bn_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules + faIpaARules + ipaBnRules + ipaBnTRestoreRules + ipaViramaDropRules,
    { source: faIpa },
  );
};
