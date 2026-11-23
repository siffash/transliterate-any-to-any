import { Text } from "types";

export const bgSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { latnSrVoicingRules } = await import("data/latn/latn-sr_voicing.rules");
  const { bgRRules } = await import("data/bg/bg_r.rules");
  const { bgRAfterRules } = await import("data/bg/bg_r-after.rules");

  return convertText(
    text,
    bgRRules + bgRAfterRules + bgLatnRules + latnSrVoicingRules + latnSrRules,
  );
};
