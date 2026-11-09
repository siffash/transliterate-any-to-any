import { Text } from "types";

export const svZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { svIpaZhRules } = await import("data/sv/sv-ipa_zh.rules");
  const { ipaZhBorgRules } = await import("data/ipa/ipa-zh_borg.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(
    svIpaRules + svNoIpaRRules + svIpaZhRules + ipaZhBorgRules + ipaZhRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
