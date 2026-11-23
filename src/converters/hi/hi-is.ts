import { Text } from "types";

export const hiIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(
    text,
    hiIpaRules + ipaGemTRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnIsRules,
  );
};
