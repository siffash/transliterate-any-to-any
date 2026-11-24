import { Text } from "types";

export const kaTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaThHiatusRules } = await import("data/ipa/ipa-th_hiatus.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThOpenIRules } = await import("data/ipa/ipa-th_open-i.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    kaIpaRules +
      ipaThHiatusRules +
      ipaThOpenRules +
      ipaThOpenIRules +
      ipaThAwRules +
      ipaThRules +
      ipaThKaranRules,
  );
};
