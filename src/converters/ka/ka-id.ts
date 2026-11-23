import { Text } from "types";

export const kaId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, kaLatnRules + latnIdRules);
};
