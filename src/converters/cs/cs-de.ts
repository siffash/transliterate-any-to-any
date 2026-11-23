import { Text } from "types";

export const csDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, csLatnRules + latnDeRules);
};
