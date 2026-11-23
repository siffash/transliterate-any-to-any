import { Text } from "types";

export const elKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaKoRules } = await import("data/el/el-ipa_ko.rules");
  const { elIpaLiRules } = await import("data/el/el-ipa_li.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    elIpaRules + elIpaLiRules + elIpaKoRules + ipaKoFinalKpRules + ipaKoRules,
  );
};
