import { Text } from "types";

export const mtTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { mtIpaThRules } = await import("data/mt/mt-ipa_th.rules");
  const { ipaThHiatusRules } = await import("data/ipa/ipa-th_hiatus.rules");
  const { ipaThGlottalRules } = await import("data/ipa/ipa-th_glottal.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaJoinRules } = await import("data/ipa/ipa_join.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    mtIpaRules +
      mtIpaThRules +
      ipaJoinRules +
      ipaThGlottalRules +
      ipaThHiatusRules +
      ipaThOpenRules +
      ipaThRules +
      ipaThKaranRules,
  );
};
