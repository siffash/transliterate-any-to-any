import { Text } from "types";

export const faHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaHiRules } = await import("data/fa/fa-ipa_hi.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaHiTRestoreRules } = await import("data/ipa/ipa-hi_t-restore.rules");

  const transliterator = RBT.fromRules(
    ipaTHoldRules +
      faIpaHiRules +
      faIpaARules +
      ipaHiRules +
      ipaHiTRestoreRules +
      ipaViramaDropRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
