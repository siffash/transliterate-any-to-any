import { Text } from "types";

export const roKk = async (text: Text) => {
  const { roRu } = await import("converters/ro/ro-ru");

  return roRu(text);
};
