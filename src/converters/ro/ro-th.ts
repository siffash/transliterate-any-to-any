import { Text } from "types";

export const roTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaThHiatusRules } = await import("data/ipa/ipa-th_hiatus.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");

  return convertText(
    text,
    roIpaRules + ipaThHiatusRules + ipaThOpenRules + ipaThAwRules + ipaThRules + ipaThKaranRules,
  );
};
