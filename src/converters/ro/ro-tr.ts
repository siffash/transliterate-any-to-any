import { Text } from "types";

export const roTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, roLatnRules + latnTrRules);
};
