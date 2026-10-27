import { Text } from "types";

export const isKk = async (text: Text) => {
  const { isRu } = await import("converters/is/is-ru");

  return isRu(text);
};
