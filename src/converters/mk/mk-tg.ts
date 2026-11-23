import { Text } from "types";

export const mkTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, mkLatnRules + latnTgRules);
};
