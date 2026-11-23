import { Text } from "types";

export const itHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { itIpaHeRules } = await import("data/it/it-ipa_he.rules");

  return convertText(text, itIpaRules + itIpaHeRules + ipaWURules + ipaHeRules);
};
