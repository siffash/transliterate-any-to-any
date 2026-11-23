import { Text } from "types";

export const kaIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, kaLatnRules + latnIsRules);
};
