import { Text } from "types";

export const tgEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, tgLatnRules + latnEtRules);
};
