import { Text } from "types";

export const ukSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnYjIRules } = await import("data/latn/latn_yj-i.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { latnSrVoicingRules } = await import("data/latn/latn-sr_voicing.rules");
  const { ukLatnGRules } = await import("data/uk/uk-latn_g.rules");
  const { latnCyCRules } = await import("data/latn/latn_cy-c.rules");

  return convertText(
    text,
    ukLatnRules +
      latnSeparatorRules +
      latnCyCRules +
      ukLatnGRules +
      latnYjIRules +
      latnSrVoicingRules +
      latnSrRules,
  );
};
