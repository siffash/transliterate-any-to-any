import { Text } from "types";

export const noZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { daNoIpaZhRules } = await import("data/ipa/da_no-ipa_zh.rules");
  const { noIpaOyRules } = await import("data/no/no-ipa_oy.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(
    noIpaRules + svNoIpaRRules + daNoIpaZhRules + noIpaOyRules + ipaZhRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
