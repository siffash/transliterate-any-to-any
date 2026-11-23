import { Text } from "types";

export const ruSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnYjIRules } = await import("data/latn/latn_yj-i.rules");
  const { latnIjIRules } = await import("data/latn/latn_ij-i.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { latnSrVoicingRules } = await import("data/latn/latn-sr_voicing.rules");

  return convertText(
    text,
    ruLatnRules +
      latnSeparatorRules +
      latnYjIRules +
      latnIjIRules +
      latnSrVoicingRules +
      latnSrRules,
  );
};
