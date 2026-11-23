import { Text } from "types";

export const caEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { latnElDRules } = await import("data/latn/latn-el_d.rules");

  return convertText(text, latnElDRules + caLatnRules + latnElRules);
};
