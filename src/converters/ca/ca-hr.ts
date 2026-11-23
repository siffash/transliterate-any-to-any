import { Text } from "types";

export const caHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, caLatnRules + latnHrRules);
};
