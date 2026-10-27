import { Text } from "types";

export const fiKk = async (text: Text) => {
  const { fiRu } = await import("converters/fi/fi-ru");

  return fiRu(text);
};
