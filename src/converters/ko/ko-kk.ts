import { Text } from "types";

export const koKk = async (text: Text) => {
  const { koRu } = await import("converters/ko/ko-ru");

  return koRu(text);
};
