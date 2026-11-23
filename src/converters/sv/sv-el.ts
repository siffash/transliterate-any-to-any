import { Text } from "types";

export const svEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, svLatnRules + latnSilentHRules + latnElRules);
};
