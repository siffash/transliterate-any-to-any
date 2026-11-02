import { Text } from "types";

export const deUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { ipaUrErRules } = await import("data/ipa/ipa-ur_er.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaUrErRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
