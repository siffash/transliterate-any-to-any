import { Text } from "types";

export const mkVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, mkLatnRules + latnViRules);
};
