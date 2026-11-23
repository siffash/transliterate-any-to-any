import { Text } from "types";

export const mtSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, mtLatnRules + latnSkRules);
};
