import { Text } from "types";

export const noUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, noIpaRules + svNoIpaRRules + ipaUrRules);
};
