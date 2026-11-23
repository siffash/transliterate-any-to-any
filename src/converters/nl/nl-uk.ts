import { Text } from "types";

export const nlUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { nlLatnCyrlRules } = await import("data/nl/nl-latn_cyrl.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { nlCyrlOuRules } = await import("data/nl/nl-cyrl_ou.rules");

  return convertText(
    text,
    nlLatnRules + latnSilentHRules + nlLatnCyrlRules + latnUkRules + nlCyrlOuRules,
  );
};
