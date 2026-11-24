import { Text } from "types";

export const ruTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ruIpaThRules } = await import("data/ru/ru-ipa_th.rules");
  const { ipaThHiatusRules } = await import("data/ipa/ipa-th_hiatus.rules");
  const { ipaThERules } = await import("data/ipa/ipa-th_e.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    ruIpaRules +
      ruIpaThRules +
      ipaThHiatusRules +
      ipaThERules +
      ipaThOpenRules +
      ipaThRules +
      ipaThKaranRules,
  );
};
