import { Text } from "types";

export const arTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaJoinRules } = await import("data/ipa/ipa_join.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(text, ipaJoinRules + ipaThRules + ipaThKaranRules, { source: arIpa });
};
