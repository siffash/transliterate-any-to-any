import { Text } from "types";

export const hiVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnViRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
