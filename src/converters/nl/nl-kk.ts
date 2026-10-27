import { Text } from "types";

export const nlKk = async (text: Text) => {
  const { nlRu } = await import("converters/nl/nl-ru");

  return nlRu(text);
};
