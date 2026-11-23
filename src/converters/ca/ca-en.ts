import { Text } from "types";

export const caEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, caLatnRules + latnEnRules);
};
