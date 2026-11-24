import { Text } from "types";

export const huTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaThHiatusRules } = await import("data/ipa/ipa-th_hiatus.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    huIpaRules + ipaThHiatusRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};
