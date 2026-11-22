import { Text } from "types";

export const faHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaOwRules } = await import("data/fa/fa-ipa_ow.rules");
  const { ipaHeKhRules } = await import("data/ipa/ipa-he_kh.rules");
  const { ipaHeAnRules } = await import("data/ipa/ipa-he_an.rules");
  const { ipaHeAaRules } = await import("data/ipa/ipa-he_aa.rules");
  const { faIpaHeRules } = await import("data/fa/fa-ipa_he.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { ipaHeKRules } = await import("data/ipa/ipa-he_k.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaHeTRestoreRules } = await import("data/ipa/ipa-he_t-restore.rules");

  const transliterator = RBT.fromRules(
    ipaTHoldRules +
      ipaGemRules +
      faIpaARules +
      faIpaOwRules +
      ipaHeAnRules +
      ipaHeKhRules +
      ipaHeAaRules +
      faIpaHeRules +
      ipaHeRules +
      ipaHeKRules +
      ipaHeTRestoreRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
