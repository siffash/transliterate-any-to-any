import { Text } from "types";

export const bsEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, bsLatnRules + latnEnRules);
};
