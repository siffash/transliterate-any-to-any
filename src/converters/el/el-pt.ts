import { Text } from "types";

export const elPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, elLatnRules + latnPtRules);
};
