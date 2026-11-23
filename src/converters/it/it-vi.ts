import { Text } from "types";

export const itVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, itLatnRules + latnViRules);
};
