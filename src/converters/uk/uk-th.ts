import { Text } from "types";

export const ukTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    ukIpaRules + ipaThOpenRules + ipaThAwRules + ipaThRules + ipaThKaranRules,
  );
};
