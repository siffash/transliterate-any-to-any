import { Text } from "types";

export const faBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaBnTRestoreRules } = await import("data/ipa/ipa-bn_t-restore.rules");

  const transliterator = RBT.fromRules(
    ipaTHoldRules + faIpaARules + ipaBnRules + ipaBnTRestoreRules + ipaViramaDropRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
