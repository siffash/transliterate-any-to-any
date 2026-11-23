import { Text } from "types";

export const elEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, elLatnRules + latnEtRules);
};
