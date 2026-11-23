import { Text } from "types";

export const nlEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, nlLatnRules + latnSilentHRules + latnElRules);
};
