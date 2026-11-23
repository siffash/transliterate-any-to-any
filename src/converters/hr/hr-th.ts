import { Text } from "types";

export const hrTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");

  return convertText(
    text,
    hrIpaRules + ipaThOpenRules + ipaThAwRules + ipaThRules + ipaThKaranRules,
  );
};
