import { Text } from "types";

export const elUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaDRules } = await import("data/el/el-ipa_d.rules");
  const { elIpaXRules } = await import("data/el/el-ipa_x.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { elIpaUrRules } = await import("data/el/el-ipa_ur.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(
    text,
    elIpaRules + elIpaDRules + elIpaXRules + latnGhGRules + elIpaUrRules + ipaUrRules,
  );
};
