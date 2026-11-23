import { Text } from "types";

export const elPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSingleRules } = await import("data/latn/latn_single.rules");
  const { latnCTsRules } = await import("data/latn/latn_c-ts.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { elLatnIaRules } = await import("data/el/el-latn_ia.rules");

  return convertText(
    text,
    elLatnGiRules +
      elLatnJiRules +
      elLatnIoRules +
      elLatnIaRules +
      elLatnRules +
      latnSingleRules +
      latnCTsRules +
      latnPlRules,
  );
};
