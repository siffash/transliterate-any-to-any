import { Text } from "types";

export const fiDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, fiLatnRules + latnDaRules);
};
