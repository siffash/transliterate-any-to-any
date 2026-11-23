import { Text } from "types";

export const fiAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, fiLatnRules + latnAzRules);
};
