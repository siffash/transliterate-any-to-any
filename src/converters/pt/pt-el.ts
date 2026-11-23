import { Text } from "types";

export const ptEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, ptLatnRules + latnElRules);
};
