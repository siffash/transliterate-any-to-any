import { Text } from "types";

export const elHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnHyGiRules } = await import("data/el/el-latn_hy-gi.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { elHyKsRules } = await import("data/el/el-hy_ks.rules");

  return convertText(
    text,
    elLatnHyGiRules + elLatnRules + latnGhGRules + latnHyRules + hyEvRules + elHyKsRules,
  );
};
