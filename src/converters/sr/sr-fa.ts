import { Text } from "types";

export const srFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");
  const { srIpaFaRules } = await import("data/sr/sr-ipa_fa.rules");

  const transliterator = RBT.fromRules(srIpaRules + srIpaFaRules + ipaFaNjRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
