import { Text } from "types";

export const elTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnCyrlRules } = await import("data/el/el-latn_cyrl.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, elLatnCyrlRules + elLatnRules + latnTgRules);
};
