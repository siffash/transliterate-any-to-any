import { Text } from "types";

export const hiEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaHRules + ipaLatnRules + "::Title;" + latnElRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
