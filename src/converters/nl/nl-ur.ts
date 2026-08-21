import { Text } from "types";

export const nlUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
