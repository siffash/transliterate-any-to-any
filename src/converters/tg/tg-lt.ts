import { Text } from "types";

export const tgLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, tgLatnRules + latnLtRules);
};
