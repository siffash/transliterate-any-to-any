import { Text } from "types";

export const nlTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { ipaThERules } = await import("data/ipa/ipa-th_e.rules");

  return convertText(
    text,
    nlIpaRules + ipaThOpenRules + ipaThERules + ipaThRules + ipaThKaranRules,
  );
};
