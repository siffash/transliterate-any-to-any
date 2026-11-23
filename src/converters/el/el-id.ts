import { Text } from "types";

export const elId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, elLatnRules + latnIdRules);
};
