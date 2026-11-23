import { Text } from "types";

export const kkRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkRuRules } = await import("data/kk/kk-ru.rules");

  return convertText(text, kkRuRules);
};
