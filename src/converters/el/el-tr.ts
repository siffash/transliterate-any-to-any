import { Text } from "types";

export const elTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnCChRules } = await import("data/latn/latn_c-ch.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { elLatnDzRules } = await import("data/el/el-latn_dz.rules");

  return convertText(
    text,
    elLatnGiRules +
      elLatnJiRules +
      elLatnRules +
      latnCChRules +
      latnGhGRules +
      elLatnDzRules +
      latnTrRules,
  );
};
