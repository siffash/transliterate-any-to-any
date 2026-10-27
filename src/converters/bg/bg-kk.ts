import { Text } from "types";

export const bgKk = async (text: Text) => {
  const { bgRu } = await import("converters/bg/bg-ru");

  return bgRu(text);
};
