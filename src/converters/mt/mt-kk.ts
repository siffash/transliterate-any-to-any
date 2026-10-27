import { Text } from "types";

export const mtKk = async (text: Text) => {
  const { mtRu } = await import("converters/mt/mt-ru");

  return mtRu(text);
};
