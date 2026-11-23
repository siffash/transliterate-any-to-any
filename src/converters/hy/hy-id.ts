import { Text } from "types";

export const hyId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, hyLatnRules + latnIdRules);
};
