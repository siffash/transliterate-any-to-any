import { Text } from "types";

export const csKk = async (text: Text) => {
  const { csRu } = await import("converters/cs/cs-ru");

  return csRu(text);
};
