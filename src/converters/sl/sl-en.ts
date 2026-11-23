import { Text } from "types";

export const slEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, slLatnRules + latnEnRules);
};
