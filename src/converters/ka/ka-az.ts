import { Text } from "types";

export const kaAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, kaLatnRules + latnAzRules);
};
