import { Text } from "types";

export const ukBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaVRules } = await import("data/uk/uk-ipa_v.rules");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, ukIpaRules + ukIpaVRules + ipaBnYRules + ipaBnRules);
};
