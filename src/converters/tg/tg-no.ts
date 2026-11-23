import { Text } from "types";

export const tgNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, tgLatnRules + latnGGhRules + latnNoRules);
};
