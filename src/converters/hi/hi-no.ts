import { Text } from "types";

export const hiNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemTRules } = await import("data/hi/hi-ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemTRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnNoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
