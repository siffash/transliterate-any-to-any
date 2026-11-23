import { Text } from "types";

export const viMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, viLatnRules + latnMkRules);
};
