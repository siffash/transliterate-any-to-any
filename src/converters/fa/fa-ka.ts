import { Text } from "types";

export const faKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaUvularQRules } = await import("data/fa/fa-ipa_uvular-q.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(faIpaUvularQRules + faIpaARules + ipaKaRules);

  if (typeof text === "string") {
    const ipa = await faIpaUvular<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
