import { Text } from "types";

export const hyTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, hyLatnRules + latnTgRules);
};
