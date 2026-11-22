import { Text } from "types";

export const elHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnHyGiRules } = await import("data/el/el-latn_hy-gi.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { elHyKsRules } = await import("data/el/el-hy_ks.rules");

  const transliterator = RBT.fromRules(
    elLatnHyGiRules + elLatnRules + latnGhGRules + latnHyRules + hyEvRules + elHyKsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
