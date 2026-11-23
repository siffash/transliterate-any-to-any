import { Text } from "types";

export const msVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, msIdLatnRules + latnViRules);
};
