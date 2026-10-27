import { Text } from "types";

export const etKk = async (text: Text) => {
  const { etRu } = await import("converters/et/et-ru");

  return etRu(text);
};
