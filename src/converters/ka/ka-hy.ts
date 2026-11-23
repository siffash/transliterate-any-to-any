import { Text } from "types";

export const kaHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaHyRRules } = await import("data/ipa/ipa-hy_r.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { kaHyEiRules } = await import("data/ka/ka-hy_ei.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");

  return convertText(
    text,
    kaIpaRules + ipaHyRRules + ipaHyRules + kaHyEiRules + hyEvRules + "::Title;",
  );
};
