import { Text } from "types";

export const caNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, caLatnRules + latnNlRules);
};
