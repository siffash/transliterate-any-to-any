import { Text } from "types";

export const deKk = async (text: Text) => {
  const { deRu } = await import("converters/de/de-ru");

  return deRu(text);
};
