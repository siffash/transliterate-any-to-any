import { Text } from "types";

export const kkSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, kkLatnRules + latnSkRules);
};
