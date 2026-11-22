import { Text } from "types";

export const ruUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrEyRules } = await import("data/ipa/ipa-ur_ey.rules");

  const transliterator = RBT.fromRules(
    ruIpaRules + ipaDevoiceVRules + ipaUrInitialARules + ipaUrRules + ipaUrEyRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
