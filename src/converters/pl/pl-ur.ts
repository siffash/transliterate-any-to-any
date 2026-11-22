import { Text } from "types";

export const plUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { plIpaUrRules } = await import("data/pl/pl-ipa_ur.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaDevoiceVRules + plIpaUrRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
