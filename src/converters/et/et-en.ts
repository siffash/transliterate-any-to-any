import { Text } from "types";

export const etEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, etLatnRules + latnEnRules);
};
