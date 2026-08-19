import { Text } from "types";

export const elAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
