import { Text } from "types";

export const elFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
