import { Text } from "types";

export const hyUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { hyLatnGhRules } = await import("data/hy/hy-latn_gh.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");

  return convertText(text, hyLatnRules + hyLatnGhRules + latnUkRules + latnApostropheDropRules);
};
