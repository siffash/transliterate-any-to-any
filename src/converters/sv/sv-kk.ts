import { Text } from "types";

export const svKk = async (text: Text) => {
  const { svRu } = await import("converters/sv/sv-ru");

  return svRu(text);
};
