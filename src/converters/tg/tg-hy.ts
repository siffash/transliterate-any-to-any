import { Text } from "types";

export const tgHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, tgLatnRules + latnApostropheDropRules + latnHyRules + hyEvRules);
};
