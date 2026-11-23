import { Text } from "types";

export const fiId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, fiLatnRules + latnIdRules);
};
