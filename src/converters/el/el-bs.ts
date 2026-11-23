import { Text } from "types";

export const elBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");

  return convertText(text, elLatnNtRules + elLatnRules + latnBsRules);
};
