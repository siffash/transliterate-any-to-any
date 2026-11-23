import { Text } from "types";

export const tgTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, tgLatnRules + latnGGhRules + latnTrRules);
};
