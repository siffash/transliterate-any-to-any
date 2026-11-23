import { Text } from "types";

export const skTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhThRules } = await import("data/ipa/cs_sk-ipa_rzh-th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    skIpaRules + csSkIpaRzhThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};
