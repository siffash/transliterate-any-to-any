import { Text } from "types";

export const hySk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");
  const { latnHardRules } = await import("data/latn/latn_hard.rules");

  return convertText(text, hyLatnRules + latnHardRules + latnSkRules);
};
