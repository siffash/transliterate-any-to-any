import { Text } from "types";

export const mkTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaThERules } = await import("data/ipa/ipa-th_e.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    mkIpaRules + ipaThERules + ipaThOpenRules + ipaThAwRules + ipaThRules + ipaThKaranRules,
  );
};
