import { Text } from "types";

export const ukKk = async (text: Text) => {
  const { ukRu } = await import("converters/uk/uk-ru");

  return ukRu(text);
};
