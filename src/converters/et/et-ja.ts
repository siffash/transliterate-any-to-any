import { Text } from "types";

export const etJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaQ2Rules } = await import("data/et/et-ipa_q2.rules");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(etIpaRules + etIpaQ2Rules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
