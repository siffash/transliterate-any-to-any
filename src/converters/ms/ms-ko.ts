import { Text } from "types";

export const msKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaKoHyphenCcRules } = await import("data/ipa/ipa-ko_hyphen-cc.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, msIpaRules + ipaFinalHRules + ipaKoHyphenCcRules + ipaKoRules);
};
