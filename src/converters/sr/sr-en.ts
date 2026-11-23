import { Text } from "types";

export const srEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, srLatnRules + latnEnRules);
};
