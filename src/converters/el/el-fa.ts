import { Text } from "types";

export const elFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaDRules } = await import("data/el/el-ipa_d.rules");
  const { elIpaXRules } = await import("data/el/el-ipa_x.rules");
  const { ipaThTRules } = await import("data/ipa/ipa_th-t.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(
    text,
    elIpaRules +
      elIpaDRules +
      elIpaXRules +
      latnGhGRules +
      ipaThTRules +
      ipaFaInitialARules +
      ipaFaRules,
  );
};
