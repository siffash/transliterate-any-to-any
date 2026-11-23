import { Text } from "types";

export const tgBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, tgLatnRules + latnBsRules);
};
