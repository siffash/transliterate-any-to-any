import { Text } from "types";

export const esVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, esLatnRules + latnViRules);
};
