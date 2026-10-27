import { Text } from "types";

export const daKk = async (text: Text) => {
  const { daRu } = await import("converters/da/da-ru");

  return daRu(text);
};
