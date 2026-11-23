import { Text } from "types";

export const elDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, elLatnRules + latnDaRules);
};
