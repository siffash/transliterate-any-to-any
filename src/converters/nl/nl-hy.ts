import { Text } from "types";

export const nlHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { nlIpaXRules } = await import("data/nl/nl-ipa_x.rules");

  return convertText(text, nlLatnRules + latnSilentHRules + nlIpaXRules + latnHyRules + hyEvRules);
};
