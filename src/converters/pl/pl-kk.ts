import { Text } from "types";

export const plKk = async (text: Text) => {
  const { plRu } = await import("converters/pl/pl-ru");

  return plRu(text);
};
