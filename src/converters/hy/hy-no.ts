import { Text } from "types";

export const hyNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, hyLatnRules + latnGGhRules + latnNoRules);
};
