import { Text } from "types";

export const mtEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, mtLatnRules + latnElRules);
};
