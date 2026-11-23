import { Text } from "types";

export const noTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, noLatnRules + latnSilentHRules + latnThTRules + latnTgRules);
};
