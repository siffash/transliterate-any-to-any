import { Text } from "types";

export const lbKk = async (text: Text) => {
  const { lbRu } = await import("converters/lb/lb-ru");

  return lbRu(text);
};
