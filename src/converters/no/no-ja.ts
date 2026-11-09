import { Text } from "types";

export const noJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { noIpaKoRules } = await import("data/no/no-ipa_ko.rules");
  const { noIpaOyRules } = await import("data/no/no-ipa_oy.rules");
  const { noIpaJaRules } = await import("data/no/no-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(
    noIpaRules + svNoIpaRRules + noIpaKoRules + noIpaOyRules + noIpaJaRules + ipaJaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
