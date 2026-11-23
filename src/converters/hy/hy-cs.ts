import { Text } from "types";

export const hyCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");
  const { latnHardRules } = await import("data/latn/latn_hard.rules");

  return convertText(text, hyLatnRules + latnHardRules + latnGGhRules + latnCsRules);
};
