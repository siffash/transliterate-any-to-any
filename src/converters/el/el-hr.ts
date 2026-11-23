import { Text } from "types";

export const elHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");

  return convertText(text, elLatnNtRules + elLatnRules + latnHrRules);
};
