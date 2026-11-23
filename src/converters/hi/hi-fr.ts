import { Text } from "types";

export const hiFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(
    text,
    hiIpaRules + ipaGemRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnFrRules,
  );
};
