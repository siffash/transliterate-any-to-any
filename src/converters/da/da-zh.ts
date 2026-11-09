import { Text } from "types";

export const daZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { daNoIpaZhRules } = await import("data/ipa/da_no-ipa_zh.rules");
  const { ipaZhBorgRules } = await import("data/ipa/ipa-zh_borg.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(
    daIpaRules + daIpaRRules + daNoIpaZhRules + ipaZhBorgRules + ipaZhRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
