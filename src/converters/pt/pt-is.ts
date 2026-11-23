import { Text } from "types";

export const ptIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, ptLatnRules + latnIsRules);
};
