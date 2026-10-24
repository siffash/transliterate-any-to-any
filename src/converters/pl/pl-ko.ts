import { Text } from "types";

export const plKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { plIpaIRules } = await import("data/pl/pl-ipa_i.rules");
  const { plIpaKoRules } = await import("data/pl/pl-ipa_ko.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(plIpaRules + plIpaIRules + plIpaKoRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
