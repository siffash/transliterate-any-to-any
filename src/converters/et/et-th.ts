import { Text } from "types";

export const etTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaQ2Rules } = await import("data/et/et-ipa_q2.rules");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    etIpaRules + etIpaQ2Rules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};
