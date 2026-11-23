import { Text } from "types";

export const tgPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, tgLatnRules + latnApostropheDropRules + latnPlRules);
};
