import { Text } from "types";

export const jaKk = async (text: Text) => {
  const { jaRu } = await import("converters/ja/ja-ru");

  return jaRu(text);
};
