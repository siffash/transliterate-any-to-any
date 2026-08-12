import { Text } from "types";

export const elHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elIpaRules } = await import("constants/el-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
