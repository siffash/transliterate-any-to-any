import { Text } from "types";

export const caUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { caIpaLRules } = await import("data/ca/ca-ipa_l.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { caIpaXRules } = await import("data/ca/ca-ipa_x.rules");
  const { caIpaSRules } = await import("data/ca/ca-ipa_s.rules");
  const { caLatnSantRules } = await import("data/ca/ca-latn_sant.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");

  const transliterator = RBT.fromRules(
    caLatnSantRules +
      caIpaRules +
      caIpaLRules +
      caIpaXRules +
      caIpaSRules +
      ipaUrInitialARules +
      ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
