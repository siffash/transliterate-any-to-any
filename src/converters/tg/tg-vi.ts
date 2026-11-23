import { Text } from "types";

export const tgVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, tgLatnRules + latnViRules);
};
