import { Text } from "types";

export const ukUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrEyRules } = await import("data/ipa/ipa-ur_ey.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaUrInitialARules + ipaUrRules + ipaUrEyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
