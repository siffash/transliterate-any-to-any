import { Text } from "types";

export const skKk = async (text: Text) => {
  const { skRu } = await import("converters/sk/sk-ru");

  return skRu(text);
};
