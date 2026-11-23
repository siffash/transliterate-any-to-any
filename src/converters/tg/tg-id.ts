import { Text } from "types";

export const tgId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, tgLatnRules + latnIdRules);
};
