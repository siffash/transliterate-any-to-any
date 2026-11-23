import { Text } from "types";

export const daCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, daLatnRules + latnCsRules);
};
