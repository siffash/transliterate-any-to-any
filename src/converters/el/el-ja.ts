import { Text } from "types";

export const elJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elIpaRules } = await import("data/el-ipa.rules");
  const { ipaJaRules } = await import("data/ipa-ja.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
