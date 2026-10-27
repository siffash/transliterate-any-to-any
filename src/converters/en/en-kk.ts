import { Text } from "types";

export const enKk = async (text: Text) => {
  const { enRu } = await import("converters/en/en-ru");

  return enRu(text);
};
