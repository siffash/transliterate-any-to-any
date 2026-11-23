import { Text } from "types";

export const hyHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { hyIpaSchwaRules } = await import("data/hy/hy-ipa_schwa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, hyIpaRules + hyIpaSchwaRules + ipaHeRules);
};
