import { Text } from "types";

export const bnHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnHiRules } = await import("data/bn/bn-hi.rules");

  return convertText(text, bnHiRules);
};
