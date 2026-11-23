import { Text } from "types";

export const daEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnElRules);
};
