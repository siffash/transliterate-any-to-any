import { Text } from "types";

export const mkHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { mkHyIchRules } = await import("data/mk/mk-hy_ich.rules");

  return convertText(text, mkLatnRules + latnHyRules + hyEvRules + mkHyIchRules);
};
