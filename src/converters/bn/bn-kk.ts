import { Text } from "types";

export const bnKk = async (text: Text) => {
  const { bnRu } = await import("converters/bn/bn-ru");

  return bnRu(text);
};
