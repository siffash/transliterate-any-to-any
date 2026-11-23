import { Text } from "types";

export const kkTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(text, kkIpaRules + ipaThOpenRules + ipaThRules + ipaThKaranRules);
};
