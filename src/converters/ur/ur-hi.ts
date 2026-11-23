import { Text } from "types";

export const urHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHiRules } = await import("data/ur/ur-ipa_hi.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");

  return convertText(text, urIpaHiRules + ipaHiRules + ipaViramaDropRules, {
    source: words => urIpa(words, true),
  });
};
