import { Text } from "types";

export const hiFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemRules } = await import("data/hi/hi-ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnFrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
