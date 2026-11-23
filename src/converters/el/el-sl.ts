import { Text } from "types";

export const elSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");
  const { latnSlIjRules } = await import("data/latn/latn-sl_ij.rules");

  return convertText(text, elLatnNtRules + elLatnRules + latnSlRules + latnSlIjRules);
};
