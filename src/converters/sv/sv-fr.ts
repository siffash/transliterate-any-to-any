import { Text } from "types";

export const svFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, svLatnRules + latnFrRules);
};
