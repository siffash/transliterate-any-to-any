import { Text } from "types";

export const elUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
