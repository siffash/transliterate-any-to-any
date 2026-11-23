import { Text } from "types";

export const ptEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, ptLatnRules + latnEtRules);
};
