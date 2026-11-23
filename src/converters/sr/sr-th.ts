import { Text } from "types";

export const srTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");

  return convertText(
    text,
    srIpaRules + ipaThOpenRules + ipaThAwRules + ipaThRules + ipaThKaranRules,
  );
};
