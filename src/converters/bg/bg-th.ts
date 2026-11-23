import { Text } from "types";

export const bgTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaThERules } = await import("data/ipa/ipa-th_e.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    bgIpaRules + ipaThERules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};
