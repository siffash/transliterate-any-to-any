import { Text } from "types";

export const bnFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnFaRules } = await import("data/bn/bn-fa.rules");

  return convertText(text, bnFaRules);
};
