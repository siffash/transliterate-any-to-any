import { Text } from "types";

export const hyBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { hyLatnGhRules } = await import("data/hy/hy-latn_gh.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, hyLatnRules + hyLatnGhRules + latnBgRules);
};
