import { Text } from "types";

export const urFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { urFaRules } = await import("data/ur/ur-fa.rules");

  return convertText(text, urNormRules + urFaRules);
};
