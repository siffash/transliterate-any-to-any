import { Text } from "types";

export const hyEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, hyLatnRules + latnGGhRules + latnEtRules);
};
