import { Text } from "types";

export const elLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");

  return convertText(text, elLatnIoRules + elLatnNtRules + elLatnRules + latnLvRules);
};
