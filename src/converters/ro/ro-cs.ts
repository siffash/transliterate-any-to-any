import { Text } from "types";

export const roCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, roLatnRules + latnCsRules);
};
