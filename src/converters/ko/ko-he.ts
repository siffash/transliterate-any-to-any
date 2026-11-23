import { Text } from "types";

export const koHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaHeARules } = await import("data/ipa/ipa-he_a.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, koIpaEoRules + ipaHeARules + ipaHeRules, {
    source: words => koIpa(words, { name: "~", syllable: "-" }, koIpaLiRules),
  });
};
