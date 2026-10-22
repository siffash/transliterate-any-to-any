import { Text } from "types";

export const hiPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaHRules + ipaLatnRules + "::Title;" + latnPtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
