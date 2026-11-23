import { Text } from "types";

export const mkRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkRuRules } = await import("data/mk/mk-ru.rules");

  return convertText(text, mkRuRules);
};
