import { Text } from "types";

export const bsVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, bsLatnRules + latnViRules);
};
