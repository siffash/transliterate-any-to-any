import { Text } from "types";

export const azEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, azLatnRules + latnElRules);
};
