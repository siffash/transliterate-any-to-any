import { Text } from "types";

export const itTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThOpenIRules } = await import("data/ipa/ipa-th_open-i.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    itIpaRules + ipaThOpenRules + ipaThOpenIRules + ipaThRules + ipaThKaranRules,
  );
};
