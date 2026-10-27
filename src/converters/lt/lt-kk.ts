import { Text } from "types";

export const ltKk = async (text: Text) => {
  const { ltRu } = await import("converters/lt/lt-ru");

  return ltRu(text);
};
