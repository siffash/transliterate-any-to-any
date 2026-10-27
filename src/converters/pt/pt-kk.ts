import { Text } from "types";

export const ptKk = async (text: Text) => {
  const { ptRu } = await import("converters/pt/pt-ru");

  return ptRu(text);
};
