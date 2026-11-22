import { Text } from "types";

export const faKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaUvularQRules } = await import("data/ipa/ipa_uvular-q.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaKaTRestoreRules } = await import("data/ipa/ipa-ka_t-restore.rules");

  const transliterator = RBT.fromRules(
    ipaTHoldRules + ipaUvularQRules + faIpaARules + ipaKaRules + ipaKaTRestoreRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpaUvular<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
