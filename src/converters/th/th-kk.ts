import { Text } from "types";

export const thKk = async (text: Text) => {
  const { thRu } = await import("converters/th/th-ru");

  return thRu(text);
};
