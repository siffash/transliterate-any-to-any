import { Text } from "types";

export const ukAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaVRules } = await import("data/uk/uk-ipa_v.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ukIpaRules + ukIpaVRules + ipaArRules);
};
