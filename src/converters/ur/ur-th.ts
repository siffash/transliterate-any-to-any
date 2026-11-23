import { Text } from "types";

export const urTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  return convertText(text, ipaThOpenRules + ipaThRules, { source: urIpa });
};
