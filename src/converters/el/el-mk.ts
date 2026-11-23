import { Text } from "types";

export const elMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnCyrlRules } = await import("data/el/el-latn_cyrl.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, elLatnCyrlRules + elLatnRules + latnMkRules);
};
