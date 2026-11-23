import { Text } from "types";

export const ptVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, ptLatnRules + latnViRules);
};
