import { Text } from "types";

export const mtDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, mtLatnRules + latnDeRules);
};
