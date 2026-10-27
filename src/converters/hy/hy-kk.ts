import { Text } from "types";

export const hyKk = async (text: Text) => {
  const { hyRu } = await import("converters/hy/hy-ru");

  return hyRu(text);
};
