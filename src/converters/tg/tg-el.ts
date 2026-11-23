import { Text } from "types";

export const tgEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, tgLatnRules + latnApostropheDropRules + latnElRules);
};
