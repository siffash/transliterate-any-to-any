import { Text } from "types";

export const idUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { msIdIpaAspRules } = await import("data/ipa/ms_id-ipa_asp.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(idIpaRules + msIdIpaAspRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
