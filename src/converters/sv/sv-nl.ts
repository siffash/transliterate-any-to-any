import { Text } from "types";

export const svNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, svLatnRules + latnNlRules);
};
