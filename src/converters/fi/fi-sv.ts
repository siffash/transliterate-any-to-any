import { Text } from "types";

export const fiSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, fiLatnRules + latnSvRules);
};
