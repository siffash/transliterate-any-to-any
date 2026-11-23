import { Text } from "types";

export const hyVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, hyLatnRules + latnViRules);
};
