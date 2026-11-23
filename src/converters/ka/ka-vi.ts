import { Text } from "types";

export const kaVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, kaLatnRules + latnViRules);
};
