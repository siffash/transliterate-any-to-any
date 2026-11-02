import { Text } from "types";

export const csUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { csSkIpaRzhRules } = await import("data/ipa/cs_sk-ipa_rzh.rules");
  const { csIpaLabialERules } = await import("data/cs/cs-ipa_labial-e.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(
    csIpaLabialERules +
      csIpaHardERules +
      csIpaHardIRules +
      csIpaRules +
      ipaDevoiceVRules +
      csSkIpaRzhRules +
      ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
