import { Text } from "types";

export const trEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, trLatnRules + latnElRules);
};
