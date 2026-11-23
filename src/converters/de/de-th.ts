import { Text } from "types";

export const deTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaIgRules } = await import("data/de/de-ipa_ig.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { deIpaThRules } = await import("data/de/de-ipa_th.rules");
  const { deThBurgRules } = await import("data/de/de-th_burg.rules");

  return convertText(
    text,
    deIpaRules +
      deIpaIgRules +
      ipaErRules +
      ipaThOpenRules +
      deIpaThRules +
      ipaThRules +
      ipaThKaranRules +
      deThBurgRules,
  );
};
