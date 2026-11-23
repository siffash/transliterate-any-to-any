import { Text } from "types";

export const hyBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { hyIpaSchwaRules } = await import("data/hy/hy-ipa_schwa.rules");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, hyIpaRules + hyIpaSchwaRules + ipaBnYRules + ipaBnRules);
};
