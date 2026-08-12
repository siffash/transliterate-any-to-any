import { Text } from "types";

export const elUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elIpaRules } = await import("constants/el-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
