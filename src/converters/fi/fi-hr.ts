import { Text } from "types";

export const fiHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, fiLatnRules + latnHrRules);
};
