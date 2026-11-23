import { Text } from "types";

export const noEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, noLatnRules + latnSilentHRules + latnThTRules + latnElRules);
};
