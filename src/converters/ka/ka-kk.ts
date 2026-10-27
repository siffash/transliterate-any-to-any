import { Text } from "types";

export const kaKk = async (text: Text) => {
  const { kaRu } = await import("converters/ka/ka-ru");

  return kaRu(text);
};
