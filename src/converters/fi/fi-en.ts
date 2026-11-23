import { Text } from "types";

export const fiEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, fiLatnRules + latnEnRules);
};
