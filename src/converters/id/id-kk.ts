import { Text } from "types";

export const idKk = async (text: Text) => {
  const { idRu } = await import("converters/id/id-ru");

  return idRu(text);
};
