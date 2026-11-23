import { Text } from "types";

export const hiTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiThRules } = await import("data/hi/hi-th.rules");

  return convertText(text, hiThRules);
};
