import { Text } from "types";

export const faHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaHyRules } = await import("data/fa/fa-ipa_hy.rules");
  const { faIpaHyAspirateRules } = await import("data/fa/fa-ipa_hy-aspirate.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaHyTRestoreRules } = await import("data/ipa/ipa-hy_t-restore.rules");

  const transliterator = RBT.fromRules(
    ipaTHoldRules +
      faIpaHyRules +
      faIpaHyAspirateRules +
      faIpaARules +
      ipaHyRules +
      "::Title;" +
      faLowerRules +
      ipaHyTRestoreRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
