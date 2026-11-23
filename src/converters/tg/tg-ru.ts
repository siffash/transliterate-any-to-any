import { Text } from "types";

export const tgRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgRuRules } = await import("data/tg/tg-ru.rules");

  return convertText(text, tgRuRules);
};
