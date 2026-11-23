import { Text } from "types";

export const ptSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, ptLatnRules + latnSvRules);
};
