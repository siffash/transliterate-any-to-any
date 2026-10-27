import { Text } from "types";

export const sqKk = async (text: Text) => {
  const { sqRu } = await import("converters/sq/sq-ru");

  return sqRu(text);
};
