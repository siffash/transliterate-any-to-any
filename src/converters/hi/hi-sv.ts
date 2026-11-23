import { Text } from "types";

export const hiSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(
    text,
    hiIpaRules + ipaGemTRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnSvRules,
  );
};
