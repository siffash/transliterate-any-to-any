import { Text } from "types";

export const viKk = async (text: Text) => {
  const { viRu } = await import("converters/vi/vi-ru");

  return viRu(text);
};
