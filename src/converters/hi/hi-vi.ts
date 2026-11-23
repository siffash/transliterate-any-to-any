import { Text } from "types";

export const hiVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, hiIpaRules + ipaAspHRules + ipaLatnRules + "::Title;" + latnViRules);
};
