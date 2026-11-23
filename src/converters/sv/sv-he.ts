import { Text } from "types";

export const svHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, svIpaRules + svNoIpaRRules + ipaHeRules);
};
