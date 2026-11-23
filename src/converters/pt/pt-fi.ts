import { Text } from "types";

export const ptFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, ptLatnRules + latnFiRules);
};
