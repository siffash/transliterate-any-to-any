import { Text } from "types";

export const huKk = async (text: Text) => {
  const { huRu } = await import("converters/hu/hu-ru");

  return huRu(text);
};
