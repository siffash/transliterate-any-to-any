import { Text } from "types";

export const slKk = async (text: Text) => {
  const { slRu } = await import("converters/sl/sl-ru");

  return slRu(text);
};
