import { Text } from "types";

export const hiFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaHRules + ipaLatnRules + "::Title;" + latnFrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
