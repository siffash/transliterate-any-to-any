import { Text } from "types";

export const elEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");

  return convertText(text, elLatnGiRules + elLatnJiRules + elLatnRules + latnEsRules + latnXRules);
};
