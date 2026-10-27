import { Text } from "types";

export const caKk = async (text: Text) => {
  const { caRu } = await import("converters/ca/ca-ru");

  return caRu(text);
};
