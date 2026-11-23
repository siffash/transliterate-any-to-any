import { Text } from "types";

export const urHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaHyRRules } = await import("data/ipa/ipa-hy_r.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");

  return convertText(text, ipaHyRRules + ipaHyRules + "::Title;", { source: urIpa });
};
