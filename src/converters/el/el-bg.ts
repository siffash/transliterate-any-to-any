import { Text } from "types";

export const elBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnCyrlRules } = await import("data/el/el-latn_cyrl.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { elBgJoRules } = await import("data/el/el-bg_jo.rules");

  return convertText(text, elLatnCyrlRules + elLatnRules + latnBgRules + elBgJoRules);
};
