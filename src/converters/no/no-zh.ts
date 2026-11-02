import { Text } from "types";

export const noZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { noIpaZhRules } = await import("data/no/no-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(noIpaRules + svNoIpaRRules + noIpaZhRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
