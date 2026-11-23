import { Text } from "types";

export const tgDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, tgLatnRules + latnGGhRules + latnDaRules);
};
