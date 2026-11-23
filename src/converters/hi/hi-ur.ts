import { Text } from "types";

export const hiUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiUrRules } = await import("data/hi/hi-ur.rules");

  return convertText(text, hiUrRules);
};
