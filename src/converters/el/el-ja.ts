import { Text } from "types";

export const elJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { elIpaDRules } = await import("data/el/el-ipa_d.rules");
  const { elIpaLiRules } = await import("data/el/el-ipa_li.rules");

  const transliterator = RBT.fromRules(elIpaRules + elIpaDRules + elIpaLiRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
