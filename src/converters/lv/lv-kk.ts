import { Text } from "types";

export const lvKk = async (text: Text) => {
  const { lvRu } = await import("converters/lv/lv-ru");

  return lvRu(text);
};
