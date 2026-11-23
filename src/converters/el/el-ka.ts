import { Text } from "types";

export const elKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { kaKsRules } = await import("data/ka/ka_ks.rules");

  return convertText(text, elLatnRules + latnGhGRules + latnKaRules + kaKsRules);
};
