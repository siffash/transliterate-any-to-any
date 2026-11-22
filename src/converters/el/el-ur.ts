import { Text } from "types";

export const elUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elIpaRules } = await import("data/el/el-ipa.rules");
  const { elIpaDRules } = await import("data/el/el-ipa_d.rules");
  const { elIpaXRules } = await import("data/el/el-ipa_x.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { elIpaUrRules } = await import("data/el/el-ipa_ur.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(
    elIpaRules + elIpaDRules + elIpaXRules + latnGhGRules + elIpaUrRules + ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
