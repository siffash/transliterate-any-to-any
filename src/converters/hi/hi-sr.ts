import { Text } from "types";

export const hiSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");
  const { hiIpaSrRules } = await import("data/hi/hi-ipa_sr.rules");

  return convertText(text, hiIpaRules + hiIpaSrRules + ipaSrRules + "::Title;");
};
