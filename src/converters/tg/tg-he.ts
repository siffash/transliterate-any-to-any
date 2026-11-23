import { Text } from "types";

export const tgHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeKhRules } = await import("data/ipa/ipa-he_kh.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, tgIpaRules + ipaHeVbRules + ipaHeKhRules + ipaHeRules);
};
