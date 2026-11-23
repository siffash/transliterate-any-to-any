import { Text } from "types";

export const slAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, slIpaRules + ipaArRules);
};
