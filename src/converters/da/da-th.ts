import { Text } from "types";

export const daTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    daIpaRules + daIpaRRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};
