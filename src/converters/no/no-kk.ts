import { Text } from "types";

export const noKk = async (text: Text) => {
  const { noRu } = await import("converters/no/no-ru");

  return noRu(text);
};
