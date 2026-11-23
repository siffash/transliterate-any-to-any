import { Text } from "types";

export const ptId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, ptLatnRules + latnIdRules);
};
