import { Text } from "types";

export const elEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elEnRules } = await import("data/el/el-en.rules");

  return convertText(text, elEnRules);
};
