import { Text } from "types";

export const ruKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { ruIpaKoRules } = await import("data/ru/ru-ipa_ko.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    ruIpaRules + ipaDevoiceVRules + ipaDevoiceZRules + ruIpaKoRules + ipaKoRules,
  );
};
