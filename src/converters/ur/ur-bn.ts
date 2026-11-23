import { Text } from "types";

export const urBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaBnRules } = await import("data/ur/ur-ipa_bn.rules");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");

  return convertText(text, urIpaBnRules + ipaBnYRules + ipaBnRules + ipaViramaDropRules, {
    source: words => urIpa(words, true),
  });
};
