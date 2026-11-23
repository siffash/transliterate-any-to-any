import { Text } from "types";

export const plTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { plIpaThRules } = await import("data/pl/pl-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { ipaThAwRules } = await import("data/ipa/ipa-th_aw.rules");

  return convertText(
    text,
    plIpaRules + plIpaThRules + ipaThOpenRules + ipaThAwRules + ipaThRules + ipaThKaranRules,
  );
};
