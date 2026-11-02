import { Text } from "types";

export const ptBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ptIpaNasalRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
