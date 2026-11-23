import { Text } from "types";

export const tgMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, tgLatnRules + latnMsRules);
};
