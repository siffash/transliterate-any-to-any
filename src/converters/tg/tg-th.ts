import { Text } from "types";

export const tgTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(text, tgIpaRules + ipaThOpenRules + ipaThRules + ipaThKaranRules);
};
