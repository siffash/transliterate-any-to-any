import { Text } from "types";

export const noAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { noLatnAuRules } = await import("data/no/no-latn_au.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, noLatnRules + noLatnAuRules + latnSilentHRules + latnAzRules);
};
