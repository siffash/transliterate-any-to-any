import { Text } from "types";

export const hrKk = async (text: Text) => {
  const { hrRu } = await import("converters/hr/hr-ru");

  return hrRu(text);
};
