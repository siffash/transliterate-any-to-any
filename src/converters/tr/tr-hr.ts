import { Text } from "types";

export const trHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, trLatnRules + latnHrRules);
};
