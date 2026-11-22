import { Text } from "types";

export const kaUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaAspirationDropRules } = await import("data/ipa/ipa_aspiration-drop.rules");
  const { ipaEjectiveDropRules } = await import("data/ipa/ipa_ejective-drop.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(
    kaIpaRules + ipaAspirationDropRules + ipaEjectiveDropRules + ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
