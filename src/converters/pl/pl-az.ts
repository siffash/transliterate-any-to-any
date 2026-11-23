import { Text } from "types";

export const plAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnHXRules } = await import("data/latn/latn_h-x.rules");

  return convertText(text, plLatnRules + latnHXRules + latnAzRules);
};
