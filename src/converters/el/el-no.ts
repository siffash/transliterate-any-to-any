import { Text } from "types";

export const elNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, elLatnRules + latnNoRules);
};
