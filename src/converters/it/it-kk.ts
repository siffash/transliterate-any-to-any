import { Text } from "types";

export const itKk = async (text: Text) => {
  const { itRu } = await import("converters/it/it-ru");

  return itRu(text);
};
