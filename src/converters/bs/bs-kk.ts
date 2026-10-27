import { Text } from "types";

export const bsKk = async (text: Text) => {
  const { bsRu } = await import("converters/bs/bs-ru");

  return bsRu(text);
};
