import { Text } from "types";

export const daEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, daLatnRules + latnEnRules);
};
