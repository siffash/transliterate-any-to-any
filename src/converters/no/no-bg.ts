import { Text } from "types";

export const noBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, noLatnRules + latnSilentHRules + latnBgRules);
};
