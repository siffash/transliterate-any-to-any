import { Text } from "types";

export const noEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, noLatnRules + latnEnRules);
};
