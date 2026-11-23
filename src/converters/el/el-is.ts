import { Text } from "types";

export const elIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");

  return convertText(text, elLatnRules + latnIsRules + latnXRules);
};
