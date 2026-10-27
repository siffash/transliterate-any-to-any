import { Text } from "types";

export const esKk = async (text: Text) => {
  const { esRu } = await import("converters/es/es-ru");

  return esRu(text);
};
