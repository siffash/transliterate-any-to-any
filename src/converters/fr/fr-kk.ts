import { Text } from "types";

export const frKk = async (text: Text) => {
  const { frRu } = await import("converters/fr/fr-ru");

  return frRu(text, { spelledEy: true, finalIeu: false });
};
