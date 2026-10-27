import { Text } from "types";

export const hiKk = async (text: Text) => {
  const { hiRu } = await import("converters/hi/hi-ru");

  return hiRu(text);
};
