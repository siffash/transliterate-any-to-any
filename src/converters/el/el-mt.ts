import { Text } from "types";

export const elMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, elLatnGiRules + elLatnJiRules + elLatnRules + latnMtRules);
};
