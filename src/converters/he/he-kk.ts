import { Text } from "types";

export const heKk = async (text: Text) => {
  const { heRu } = await import("converters/he/he-ru");

  return heRu(text);
};
