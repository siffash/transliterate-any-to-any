import { Text } from "types";

export const slFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaFaNjRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
