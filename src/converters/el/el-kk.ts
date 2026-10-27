import { Text } from "types";

export const elKk = async (text: Text) => {
  const { elRu } = await import("converters/el/el-ru");

  return elRu(text);
};
