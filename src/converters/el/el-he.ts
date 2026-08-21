import { Text } from "types";

export const elHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
