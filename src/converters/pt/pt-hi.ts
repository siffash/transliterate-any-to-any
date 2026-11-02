import { Text } from "types";

export const ptHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ptIpaNasalRules + ipaHiLongARules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
