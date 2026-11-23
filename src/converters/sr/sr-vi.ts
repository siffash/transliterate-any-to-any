import { Text } from "types";

export const srVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, srLatnRules + latnViRules);
};
