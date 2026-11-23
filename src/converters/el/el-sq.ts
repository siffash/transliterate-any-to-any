import { Text } from "types";

export const elSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSingleRules } = await import("data/latn/latn_single.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");

  return convertText(text, elLatnNtRules + elLatnRules + latnSingleRules + latnSqRules);
};
