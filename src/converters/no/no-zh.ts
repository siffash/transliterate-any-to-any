import { Text } from "types";

export const noZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noIpaRules } = await import("data/no/no-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { daNoIpaZhRules } = await import("data/ipa/da_no-ipa_zh.rules");
  const { noIpaOyRules } = await import("data/no/no-ipa_oy.rules");
  const { ipaZhBorgRules } = await import("data/ipa/ipa-zh_borg.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(
    text,
    noIpaRules + svNoIpaRRules + daNoIpaZhRules + noIpaOyRules + ipaZhBorgRules + ipaZhRules,
  );
};
