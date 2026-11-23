import { Text } from "types";

export const noSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { noLatnAuRules } = await import("data/no/no-latn_au.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, noLatnRules + noLatnAuRules + latnSilentHRules + latnSrRules);
};
