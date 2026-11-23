import { Text } from "types";

export const tgAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, tgLatnRules + latnAzRules);
};
