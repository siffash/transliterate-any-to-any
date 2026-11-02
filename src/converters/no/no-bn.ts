import { Text } from "types";

export const noBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(noIpaRules + svNoIpaRRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
