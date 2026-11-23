import { Text } from "types";

export const kkCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnKzRules } = await import("data/kk/kk-latn_kz.rules");

  return convertText(text, kkLatnKzRules);
};
