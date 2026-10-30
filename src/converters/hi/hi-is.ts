import { Text } from "types";

export const hiIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemTRules } = await import("data/hi/hi-ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemTRules + hiIpaHRules + ipaLatnRules + "::Title;" + latnIsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
