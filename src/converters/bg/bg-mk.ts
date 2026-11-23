import { Text } from "types";

export const bgMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgMkRules } = await import("data/bg/bg-mk.rules");

  return convertText(text, bgMkRules);
};
