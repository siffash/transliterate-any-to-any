import { Text } from "types";

export const hyDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, hyLatnRules + latnGGhRules + latnDeRules);
};
