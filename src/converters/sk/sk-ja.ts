import { Text } from "types";

export const skJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { csSkIpaRzhJaRules } = await import("data/ipa/cs_sk-ipa_rzh-ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(
    skIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceVRules +
      ipaDevoiceZRules +
      csSkIpaRzhJaRules +
      ipaJaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
