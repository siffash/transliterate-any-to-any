import { Text } from "types";

export const nlTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { nlLatnCyrlRules } = await import("data/nl/nl-latn_cyrl.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, nlLatnRules + latnSilentHRules + nlLatnCyrlRules + latnTgRules);
};
