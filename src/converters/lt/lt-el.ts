import { Text } from "types";

export const ltEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, ltLatnRules + latnElRules);
};
