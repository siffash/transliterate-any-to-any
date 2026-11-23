import { Text } from "types";

export const tgSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, tgLatnRules + latnSqRules);
};
