import { Text } from "types";

export const srKk = async (text: Text) => {
  const { srRu } = await import("converters/sr/sr-ru");

  return srRu(text);
};
