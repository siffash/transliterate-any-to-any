import { Text } from "types";

export const trSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, trLatnRules + latnSkRules);
};
