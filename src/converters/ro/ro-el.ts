import { Text } from "types";

export const roEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnElRules } = await import("data/ro/ro-latn_el.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, roLatnRules + roLatnElRules + latnElRules);
};
