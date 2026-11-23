import { Text } from "types";

export const hiEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaElRules } = await import("data/hi/hi-ipa_el.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(
    text,
    hiIpaRules +
      ipaGemRules +
      hiIpaElRules +
      ipaAspHRules +
      ipaLatnRules +
      "::Title;" +
      latnElRules,
  );
};
