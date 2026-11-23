import { Text } from "types";

export const koTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koIpaThRules } = await import("data/ko/ko-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, koIpaThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules, {
    source: words => koIpa(words, { name: "~" }),
  });
};
