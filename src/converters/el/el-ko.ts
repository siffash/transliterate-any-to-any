import { Text } from "types";

export const elKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaKoRules } = await import("data/el/el-ipa_ko.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(elIpaRules + elIpaKoRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
