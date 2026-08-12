import { Text } from "types";

export const elZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elIpaRules } = await import("data/el-ipa.rules");
  const { ipaZhRules } = await import("data/ipa-zh.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
