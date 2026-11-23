import { Text } from "types";

export const plVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, plLatnRules + latnViRules);
};
