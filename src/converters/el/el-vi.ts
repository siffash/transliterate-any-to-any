import { Text } from "types";

export const elVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, elLatnRules + latnViRules);
};
