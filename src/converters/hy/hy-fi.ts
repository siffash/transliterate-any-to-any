import { Text } from "types";

export const hyFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, hyLatnRules + latnGGhRules + latnFiRules);
};
