import { Text } from "types";

export const hySv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, hyLatnRules + latnDzjRules + latnGGhRules + latnSvRules);
};
