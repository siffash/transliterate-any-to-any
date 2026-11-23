import { Text } from "types";

export const roBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, roLatnRules + latnBsRules);
};
