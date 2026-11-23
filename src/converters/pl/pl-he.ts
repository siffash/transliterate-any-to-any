import { Text } from "types";

export const plHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { plIpaHeRules } = await import("data/pl/pl-ipa_he.rules");

  return convertText(text, plIpaRules + plIpaHeRules + ipaHeVbRules + ipaHeRules);
};
